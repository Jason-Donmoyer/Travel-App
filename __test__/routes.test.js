import 'regenerator-runtime/runtime';

const supertest = require('supertest');
const app = require('../src/server/server');
const request = supertest(app);

  
describe('Test location endpoint', () => {
  test('Get endpoint', async done => {
      const res = await request.get('/location');

      expect(res.status).toBe(200);
      
      done();
  });
});

describe('Test weather endpoint', () => {
  test('Get endpoint', async done => {
      const res = await request.get('/weather');

      expect(res.status).toBe(200);
      
      done();
  });
});

describe('Test forecast endpoint', () => {
  test('Get endpoint', async done => {
      const res = await request.get('/forecast');

      expect(res.status).toBe(200);
      
      done();
  });
});

describe('Test pix endpoint', () => {
  test('Get endpoint', async done => {
      const res = await request.get('/pix');

      expect(res.status).toBe(200);
      
      done();
  });
});

  

