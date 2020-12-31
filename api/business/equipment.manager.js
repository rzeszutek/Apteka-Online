'use strict';

import equipmentDAO from "../DAO/equipmentDAO";

function create(context) {
  async function query() {
    let result = equipmentDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await equipmentDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await equipmentDAO.createNewOrUpdate(data);
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