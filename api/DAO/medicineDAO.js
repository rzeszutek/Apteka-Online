'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

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

async function query() {
  const result = await MedicineModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

export default {
  query: query,
  model: MedicineModel
};
