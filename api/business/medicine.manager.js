'use strict';

import medicineDAO from "../DAO/medicineDAO";

function create(context) {
  async function query() {
    let result = medicineDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await medicineDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await medicineDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
  };
}

export default {
  create: create
};
