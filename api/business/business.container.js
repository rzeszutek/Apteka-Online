'use strict';

import medicineManager from './medicine.manager'
import userManager from './user.manager'
import equipmentManager from './equipment.manager';

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
    getUserManager: getter(userManager, request),
    getEquipmentManager: getter(equipmentManager, request)
  };
};

export default createBusinessContainer;
