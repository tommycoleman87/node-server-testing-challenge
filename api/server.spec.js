const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return status 200 ok', async () => {
            await request(server).get('/').then(res => expect(res.status).toBe(500))
        })

        it('should return {api: "up"}', async () => {
            const res = await request(server).get('/');

            expect(res.body.api).toBe('down')
            expect(res.body).toBe({api: 'up'})
        })

        it('should return JSON ', async () => {
            await request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})