'use strict';

import mongoose from 'mongoose';
import * as _ from 'lodash';
import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';
import bcrypt from 'bcrypt';

const passwordSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true, unique: true },
  password: { type: String, required: true }
}, {
  collection: 'passwords'
});

const PasswordModel = mongoose.model('passwords', passwordSchema);

async function createOrUpdate(data) {
  const result = await PasswordModel.findOneAndUpdate({ userId: data.userId }, _.omit(data, 'id'), { new: true });
  if (!result) {
    const result = await new PasswordModel({ userId: data.userId, password: data.password }).save();
    if (result) {
      return mongoConverter(result);
    }
  }
  return result;
}

async function authorize(userId, password) {
  const result = await PasswordModel.findOne({ userId: userId});
  const hash = bcrypt.compareSync(password, result.password);
  if (hash) {
    return true;
  }
  throw applicationException.new(applicationException.UNAUTHORIZED, 'User and password does not match');
}

export default {
  createOrUpdate: createOrUpdate,
  authorize: authorize,
  model: PasswordModel
};






