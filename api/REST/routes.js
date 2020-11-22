'use strict';

import endpoint from './medicines.endpoints';
import userEndpoint from "./user.endpoint";

const routes = (router, config) => {
  endpoint(router);
  userEndpoint(router);
};

export default routes;
