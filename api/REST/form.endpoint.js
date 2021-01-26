'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';
// import auth from '../middleware/auth';
const admin = require('../middleware/admin');
import auth from '../middleware/auth';

const formEndpoint = (router) => {
  router.get('/api/form', async (request, response, next) => {
    try {
      let result = await business(request).getFormManager(request).query();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post('/api/form/create', async (request, response, next) => {
    try {
      let result = await business(request).getFormManager(request).createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get('/api/form/:id', async (request, response, next) => {
    try {
      let result = await business(request).getFormManager(request).get(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get('/api/form/:loginName', async (request, response, next) => {
    try {
      let result = await business(request).getFormManager(request).getByEmail(request.params.loginName);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete('/api/form/delete/:id', async (request, response, next) => {
    try {
      let result = await business(request).getFormManager(request).removeFormById(request.params.id);
      response.status(200).send('Form with id: ' + result + ' deleted.');
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  })
};

export default formEndpoint;
