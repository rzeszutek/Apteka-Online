'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const orderEndpoint = (router) => {
  router.post('/api/order/create', async (request, response, next) => {
    try {
      let result = await business(request).getOrderManager(request).createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  })

  router.get('/api/order', async (request, response) => {
    try {
      let result = await business(request).getOrderManager().query();
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })

  router.get('/api/order/:id', async (request, response) => {
    try {
      let result = await business(request).getOrderManager().get(request.params.id);
      response.status(200).send(result);
    }
    catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default orderEndpoint;