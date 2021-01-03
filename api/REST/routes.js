'use strict';

import userEndpoint from "./user.endpoint";
import medicineEndpoint from "./medicines.endpoints";
import equipmentEndpoint from "./equipment.endpoint";
import orderEndpoint from "./order.endpoint";
import prescriptionsEndpoint from "./prescriptions.endpoint";

const routes = (router, config) => {
  medicineEndpoint(router);
  equipmentEndpoint(router)
  userEndpoint(router);
  orderEndpoint(router);
  prescriptionsEndpoint(router);
};

export default routes;
