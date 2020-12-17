'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const medicineEndpoint = (router) => {
  router.get('/api', async (request, response) => {
    try {
      let result = 'It\'s working.';
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/api/medicine', async (request, response) => {
    try {
      let result = await business(request).getMedicineManager().query();
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })

  router.get('/api/medicine/:id', async (request, response) => {
    try {
      let result = await business(request).getMedicineManager().get(request.params.id);
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default medicineEndpoint;
