'use strict';

import medicineDAO from "../DAO/medicineDAO";
import UserDAO from "../DAO/userDAO";

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

  async function removeMedicineById(id) {
    return await medicineDAO.removeById(id);
  }

  return {
    query: query,
    get: get,
    removeMedicineById: removeMedicineById,
    createNewOrUpdate: createNewOrUpdate,
  };
}

export default {
  create: create
};
