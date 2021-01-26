'use strict';

import FormDAO from '../DAO/formDAO';
import applicationException from '../service/applicationException';
import equipmentDAO from "../DAO/equipmentDAO";

function create(context) {
  async function query() {
    let result = FormDAO.query();
    if (result) {
      return result;
     }
   }

  async function get(id) {
    let result = await FormDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await FormDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  async function getByEmail(loginName) {
    let result = await FormDAO.getByEmail(loginName);
    if (result) {
      return result;
    }
  }

  async function removeFormById(id) {
    return await FormDAO.removeById(id);
  }

  return {
    get: get,
    getByEmail: getByEmail,
    query: query,
    createNewOrUpdate: createNewOrUpdate,
    removeFormById: removeFormById,
  };
}

export default {
  create: create
};
