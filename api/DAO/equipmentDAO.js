'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";
import applicationException from "../service/applicationException";

const equipmentSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: String},
  imageURL: {type: String},
  description: {type: String},
}, {
  collection: 'equipment'
});

equipmentSchema.plugin(uniqueValidator);

const EquipmentModel = mongoose.model('equipment', equipmentSchema);

async function query() {
  const result = await EquipmentModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(id) {
  const result = await EquipmentModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Equipment not found');
}

export default {
  query: query,
  get: get,
  model: EquipmentModel
};
