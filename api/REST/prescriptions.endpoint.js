'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const medicineEndpoint = (router) => {
  router.get('/api/prescription', async (request, response) => {
    try {
      let result = await business(request).getPrescriptionManager().get(request.query.PESEL, request.query.code);
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default medicineEndpoint;
