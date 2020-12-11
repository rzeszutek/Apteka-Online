'use strict';

import mongoose from 'mongoose';
import * as _ from 'lodash';
import Promise from 'bluebird';
import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';
import uniqueValidator from 'mongoose-unique-validator';

const userRole = {
  admin: 'admin',
  user: 'user'
};

const userRoles = [userRole.admin, userRole.user];

const userSchema = new mongoose.Schema({
  loginName: { type: String, required: false, unique: true, sparse: true},
  //PESEL: { type: String, required: false, unique: true, sparse: true},
  name: { type: String, required: true, unique: false },
  surname: { type: String, required: true, unique: false},
  phone: { type: Number, required: false, unique: false },
  role: { type: String, enum: userRoles, default: userRole.user },
  active: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false, required: false }
}, {
  collection: 'users'
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('users', userSchema);

function createNewOrUpdate(user) {
  return Promise.resolve().then(() => {
    if (!user.id) {
      return new UserModel(user).save().then(result => {
        if (result) {
          return mongoConverter(result);
        }
      });
    } else {
      return UserModel.findByIdAndUpdate(user.id, _.omit(user, 'id'), { new: true });
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

async function getByEmailOrPESEL(name) {
  const result = await UserModel.findOne({ loginName: name });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function get(id) {
  const result = await UserModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function removeById(id) {
  return await UserModel.findByIdAndRemove(id);
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByEmailOrPESEL: getByEmailOrPESEL,
  get: get,
  removeById: removeById,

  userRole: userRole,
  model: UserModel
};
