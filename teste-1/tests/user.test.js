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

describe(`User Route`, () => {
    it('GET - /users returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            done();
        });
    });
});