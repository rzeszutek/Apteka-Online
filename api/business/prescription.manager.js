'use strict';

import prescriptionDAO from "../DAO/prescriptionDAO";

function create(context) {
  async function query() {
    let result = prescriptionDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(PESEL, code) {
    let result = await prescriptionDAO.get(PESEL, code);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get
  };
}

export default {
  create: create
};
