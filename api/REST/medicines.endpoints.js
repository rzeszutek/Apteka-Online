'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';
import auth from "../middleware/auth";

const medicineEndpoint = (router) => {
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

  router.post('/api/medicine/create', async (request, response, next) => {
    try {
      let result = await business(request).getMedicineManager(request).createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete('/api/medicine/delete/:id', async (request, response, next) => {
    try {
      let result = await business(request).getMedicineManager(request).removeMedicineById(request.params.id);
      response.status(200).send('Medicine with id: ' + result + ' deleted.');
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default medicineEndpoint;
