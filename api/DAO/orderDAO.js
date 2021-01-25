'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import Promise from 'bluebird';
import * as _ from "lodash";
import applicationException from "../service/applicationException";
import momentWrapper from "../service/momentWrapper";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true},
  medicines: {type: Array},
  equipment: {type: Array},
  shipment: {type: Boolean},
  price: {type: Number},
  payment: {type: String},
  address: {type: String},
  date: {type: Date},
  email: {type: String}
}, {
  collection: 'orders'
});
orderSchema.plugin(uniqueValidator);

const OrderModel = mongoose.model('orders', orderSchema);

function createNewOrUpdate(order) {
  return Promise.resolve().then(() => {
    if (!order.id) {
      return new OrderModel(order).save().then(result => {
        if (result) {
          return mongoConverter(result);
        }
      });
    } else {
      return OrderModel.findByIdAndUpdate(order.id, _.omit(order, 'id'), { new: true });
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
  const result = await OrderModel.find({});
  if (result) {
    return mongoConverter(result);
  }
}

async function get(id) {
  const result = await OrderModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Order not found');
}

async function getUserOrders(userId) {
  const result = await OrderModel.find({ userId: userId });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Order not found');
}

async function removeById(id) {
  return await OrderModel.findByIdAndRemove(id);
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  query: query,
  get: get,
  getUserOrders: getUserOrders,
  removeById: removeById,
  model: OrderModel
};
