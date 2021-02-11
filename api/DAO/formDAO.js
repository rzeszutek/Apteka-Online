'use strict';

import mongoose from 'mongoose';
import * as _ from 'lodash';
import Promise from 'bluebird';
import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';
import uniqueValidator from 'mongoose-unique-validator';


const subject = {
  product: 'Pytanie o produkt',
  order: 'Dotyczy zamówienia',
  reclamation: 'Reklamacje i zwrot towaru',
  money: 'Dotyczy zwrotu pieniędzy',
  prescription: 'Dotyczy E-Recept',
  account: 'Dotyczy konta'
};

const subjects = [
  subject.product,
  subject.order,
  subject.reclamation,
  subject.money,
  subject.prescription,
  subject.account
];

const formSchema = new mongoose.Schema({
  loginName: { type: String},
  subject: { type: String, enum: subjects },
  description: { type: String}
}, {
  collection: 'forms'
});

formSchema.plugin(uniqueValidator);

const FormModel = mongoose.model('forms', formSchema);

function createNewOrUpdate(form) {
  return Promise.resolve().then(() => {
    if (!form.id) {
      return new FormModel(form).save().then(result => {
        if (result) {
          return mongoConverter(result);
        }
      });
    } else {
      return FormModel.findByIdAndUpdate(form.id, _.omit(form, 'id'), { new: true });
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

async function get(id) {
  const result = await FormModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Equipment not found');
}

async function getByEmail(name) {
  const result = await FormModel.findOne({ loginName: name });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function query() {
  const result = await FormModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

// async function get(id) {
//   const result = await FormModel.findOne({ _id: id });
//   if (result) {
//     return mongoConverter(result);
//   }
//   throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
// }

async function removeById(id) {
  return await FormModel.findByIdAndRemove(id);
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByEmail: getByEmail,
  query: query,
  get: get,
  removeById: removeById,
  subject: subject,
  model: FormModel
};
