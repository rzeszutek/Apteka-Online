'use strict';

import userEndpoint from "./user.endpoint";
import medicineEndpoint from "./medicines.endpoints";
import equipmentEndpoint from "./equipment.endpoint";

const routes = (router, config) => {
  medicineEndpoint(router);
  equipmentEndpoint(router)
  userEndpoint(router);
};

export default routes;
