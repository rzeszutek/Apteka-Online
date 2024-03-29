'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';
// import auth from '../middleware/auth';
const admin = require('../middleware/admin');
import auth from '../middleware/auth';

const userEndpoint = (router) => {
  router.get('/api/users', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).query();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post('/api/user/auth', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).authenticate(request.body.login, request.body.password);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  // router.delete('/api/user/logout', async (request, response, next) => {
  //   try {
  //     let result = await business(request).getUserManager(request).removeHashSession(request.body.userId);
  //     response.status(200).send('Access token for user with id: ' + result + ' deleted.');
  //   } catch (error) {
  //     applicationException.errorHandler(error, response);
  //   }
  // })

  router.post('/api/user/create', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post('/api/user/passwordCheck', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).checkPassword(request.body.loginName, request.body.password);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  // router.get('/api/user/:id', async (request, response, next) => {
  //   try {
  //     let result = await business(request).getUserManager(request).get(request.params.id);
  //     response.status(200).send(result);
  //   } catch (error) {
  //     applicationException.errorHandler(error, response);
  //   }
  // });

  router.get('/api/user/:loginName', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).getByEmail(request.params.loginName);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete('/api/user/delete/:id', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).removeUserById(request.params.id);
      response.status(200).send('User with id: ' + result + ' deleted.');
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  })

  router.delete('/api/user/logout/:userId', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).removeHashSession(request.params.userId);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post('/api/user/sendEmail', async (request, response, next) => {
    try {
      let result = await business(request).getUserManager(request).sendEmail(request.body.loginName);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default userEndpoint;
