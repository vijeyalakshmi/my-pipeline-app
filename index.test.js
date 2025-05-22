const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('responds with Hello, Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Axigo Demo - Hello, Pipeline! This is the automated CI / CD deployment!');
  });
});
