const request = require('request');
const expressServer = require('../config/express-server');
require('dotenv/config');
const baseURL = process.env.baseURL || 'http://localhost:8080';

let server;

beforeEach((done) => {
    server = expressServer();
    done();
});

afterEach(async (done) => {
    await server.close();
    done();
});

describe(`Root API`, () => {
    it('GET - / returns 200 with expected payload', (done) => {
        request.get(`${baseURL}`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody.message).toEqual(`Root API`);

            done();
        });
    });
});