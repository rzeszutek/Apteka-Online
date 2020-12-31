'use strict';

import userEndpoint from "./user.endpoint";
import medicineEndpoint from "./medicines.endpoints";
import equipmentEndpoint from "./equipment.endpoint";
import ordersEndpoint from "./orders.endpoint";

const routes = (router, config) => {
  medicineEndpoint(router);
  equipmentEndpoint(router)
  userEndpoint(router);
  ordersEndpoint(router);
};

export default routes;
