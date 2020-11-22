'use strict';

import medicineManager from './medicine.manager'
import userManager from './user.manager'

function getContext(request) {
  return { user: request && request.user };
}

function getter(manager, request) {
  return function (request) {
    return manager.create(getContext(request), this);
  };
}

const createBusinessContainer = (request, config) => {

  return {
    getMedicineManager: getter(medicineManager, request),
    getUserManager: getter(userManager, request)
  };
};

export default createBusinessContainer;
