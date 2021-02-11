'use strict';

import app from '../../app.js';
import request from 'supertest';

// test('Should register a user', async () => {
//   await request(app).get('/api/medicine')
//     .send({
//       name:'test123',
//       email:'test123@test.com',
//       password:'1234567'
//     }).expect(200)
// });

test('Should return medicine name', async ()=>{
  const {body} = await request(app).get('/api/medicines/5fa9576c95723ea0304a0c40');
  expect(body).toContain(
    'Ibuprom'
  )
});

// test('Should login a user', async () =>{
//   await request(app).post('/api/user/login')
//     .send({
//       email:'test@test.com',
//       password:'1234567',
//     });
//   expect(200)
// });
//
// test('Should logout a user', async () => {
//   const {body} = await request(app).delete('/api/user/logout')
//     .send({
//       userId:"60085618f5d65d07a0af8eed"
//     })
//   expect(body).toEqual({
//     logout: "true"
//   })
// })
