'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const equipmentEndpoint = (router) => {
  router.get('/api/equipment', async (request, response) => {
    try {
      let result = await business(request).getEquipmentManager().query();
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })

  router.get('/api/equipment/:id', async (request, response) => {
    try {
      let result = await business(request).getEquipmentManager().get(request.params.id);
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default equipmentEndpoint;
