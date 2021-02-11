'use strict';

import PasswordDAO from '../DAO/passwordDAO';
import TokenDAO from '../DAO/tokenDAO';
import UserDAO from '../DAO/userDAO';
import applicationException from '../service/applicationException';
import bcrypt from 'bcrypt';
import medicineDAO from "../DAO/medicineDAO";
import config from "../config";
import nodemailer from 'nodemailer';

function create(context) {
  function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  async function authenticate(name, password) {
    let userData;
    const user = await UserDAO.getByEmail(name);
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

  async function checkPassword(name, password) {
    const user = await UserDAO.getByEmail(name);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    if (!user.active) {
      throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or does not active');
    }
    return await PasswordDAO.authorize(user.id, password);
  }

  async function query() {
    let result = UserDAO.query();
    if (result) {
      return result;
    }
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

  async function getByEmail(loginName) {
    let result = await UserDAO.getByEmail(loginName);
    if (result) {
      return result;
    }
  }

  async function removeUserById(id) {
    return await UserDAO.removeById(id);
  }

  async function removeHashSession(userId) {
    return await TokenDAO.remove(userId);
  }

  async function sendEmail(email) {
    let userData;
    const user = await UserDAO.getByEmail(email);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    if (!user.active) {
      throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or does not active');
    }
    userData = await user;
    const token = await TokenDAO.createPasswordReset(userData);

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'noreply.aptekaonline.rr@gmail.com',
        pass: config.GmailPassword
      }
    });

    let mailOptions = {
      from: 'noreply.aptekaonline.rr@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: 'Kliknij w link, aby zresetować hasło: http://localhost:4200/password-reset/' + token.value + '/' + userData.id
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  return {
    authenticate: authenticate,
    checkPassword: checkPassword,
    getByEmail: getByEmail,
    query: query,
    getUserByToken: getUserByToken,
    createNewOrUpdate: createNewOrUpdate,
    removeUserById: removeUserById,
    removeHashSession: removeHashSession,
    sendEmail: sendEmail
  };
}

export default {
  create: create
};
