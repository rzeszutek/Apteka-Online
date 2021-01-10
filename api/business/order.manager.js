'use strict';

import orderDAO from "../DAO/orderDAO";

function create(context) {
  async function query() {
    let result = orderDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await orderDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function getUserOrders(userId) {
    let result = await orderDAO.getUserOrders(userId);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await orderDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  async function removeOrderById(id) {
    return await orderDAO.removeById(id);
  }

  return {
    query: query,
    get: get,
    getUserOrders: getUserOrders,
    createNewOrUpdate: createNewOrUpdate,
    removeOrderById: removeOrderById
  };
}

export default {
  create: create
};
