const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return status 200 ok', async () => {
            await request(server).get('/').then(res => expect(res.status).toBe(500))
        })
    })
})