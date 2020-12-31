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
    createNewOrUpdate: createNewOrUpdate,
    removeOrderById: removeOrderById
  };
}

export default {
  create: create
};
