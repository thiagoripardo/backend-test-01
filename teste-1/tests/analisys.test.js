const request = require('request');
const expressServer = require('../config/express-server');
require('dotenv/config');
const baseURL = process.env.baseURL || 'http://localhost:8080';

describe(`Analisys Routes`, () => {
    let server;

    beforeEach((done) => {
        server = expressServer();
        done();
    });

    afterEach(async (done) => {
        await server.close();
        done();
    });

    it('GET - /analisys returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/analisys`, (error, response) => {
            expect(response).toBeDefined();
            expect(response.statusCode).toEqual(200);

            done();
        });
    });

    it('GET - /analisys/test returns 404 with expected payload', (done) => {
        request.get(`${baseURL}/analisys/test`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response).toBeDefined();
            expect(response.statusCode).toEqual(404);
            expect(jsonBody.error).toEqual(`Sorry, the id:test doesn't exists.`);

            done();
        });
    });

    it('GET - /analisys/1 returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/analisys/1`, (error, response) => {
            expect(response).toBeDefined();
            expect(response.statusCode).toEqual(200);

            done();
        });
    });
});