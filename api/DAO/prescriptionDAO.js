'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";
import applicationException from "../service/applicationException";

const prescriptionSchema = new mongoose.Schema({
  PESEL: {type: Number},
  code: {type: Number},
  medicines: {type: Array},
  price: {type: String},
}, {
  collection: 'prescriptions'
});
prescriptionSchema.plugin(uniqueValidator);

const PrescriptionModel = mongoose.model('prescriptions', prescriptionSchema);

async function query() {
  const result = await PrescriptionModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(PESEL, code) {
  const result = await PrescriptionModel.findOne({ PESEL: PESEL });
  if (result) {
    if (result.code == code) {
      return mongoConverter(result);
    }
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Prescription not found');
}

export default {
  query: query,
  get: get,
  model: PrescriptionModel
};
