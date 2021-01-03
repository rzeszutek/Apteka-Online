'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";
import applicationException from "../service/applicationException";

const medicineSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: String},
  imageURL: {type: String},
  reimbursed: {type: Boolean},
  prescription: {type: Boolean},
  description: {type: String},
}, {
  collection: 'medicines'
});
medicineSchema.plugin(uniqueValidator);

const MedicineModel = mongoose.model('medicines', medicineSchema);

function createNewOrUpdate(order) {
  return Promise.resolve().then(() => {
    if (!order.id) {
      return new MedicineModel(order).save().then(result => {
        if (result) {
          return mongoConverter(result);
        }
      });
    } else {
      return MedicineModel.findByIdAndUpdate(order.id, _.omit(order, 'id'), { new: true });
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

async function query() {
  const result = await MedicineModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(id) {
  const result = await MedicineModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Medicine not found');
}

async function removeById(id) {
  return await MedicineModel.findByIdAndRemove(id);
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  removeById: removeById,
  query: query,
  get: get,
  model: MedicineModel
};
