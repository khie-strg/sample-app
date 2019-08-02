const request = require('supertest')
const app = require('../app.js')

describe('GET /', () => {
  it('responds with Hey world', (done) => {
    request(app).get('/').expect('Hey world', done)
  })
})
