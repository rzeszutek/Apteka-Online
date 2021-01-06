'use strict';

import equipmentDAO from "../DAO/equipmentDAO";
import medicineDAO from "../DAO/medicineDAO";

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

  async function removeEquipmentById(id) {
    return await equipmentDAO.removeById(id);
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    removeEquipmentById: removeEquipmentById
  };
}

export default {
  create: create
};
