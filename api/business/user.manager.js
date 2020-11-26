'use strict';

import PasswordDAO from '../DAO/passwordDAO';
import TokenDAO from '../DAO/tokenDAO';
import UserDAO from '../DAO/userDAO';
import applicationException from '../service/applicationException';
import bcrypt from 'bcrypt';

function create(context) {

  function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  async function authenticate(name, password) {
    let userData;
    const user = await UserDAO.getByEmailOrPESEL(name);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    if (!user.active) {
      throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or does not active');
    }
    userData = await user;
    await PasswordDAO.authorize(user.id, password);
    const token = await TokenDAO.create(userData);
    return getToken(token);
  }

  function getToken(token) {
    return {token: token.value};
  }

  async function getUserByToken(receivedToken) {
    const token = await TokenDAO.get(receivedToken);
    return await UserDAO.get(token.userId);
  }

  async function createNewOrUpdate(userData) {
    const user = await UserDAO.createNewOrUpdate(userData);
    if (await userData.password) {
      return await PasswordDAO.createOrUpdate({userId: user.id, password: hashPassword(userData.password)});
    } else {
      return user;
    }
  }

  async function removeUserById(id) {
    return await UserDAO.removeById(id);
  }

  async function removeHashSession(userId) {
    return await TokenDAO.remove(userId);
  }

  return {
    authenticate: authenticate,
    getUserByToken: getUserByToken,
    createNewOrUpdate: createNewOrUpdate,
    removeUserById: removeUserById,
    removeHashSession: removeHashSession
  };
}

export default {
  create: create
};
