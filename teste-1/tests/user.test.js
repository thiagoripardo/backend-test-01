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
    it('GET All - /users returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            done();
        });
    });

    it('GET Filter - /users?role=Manager returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users?role=Manager`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            jsonBody.forEach(element => {
                expect(element.role).toEqual(`Manager`);
            })

            done();
        });
    });

    it('GET Sort - /users?orderBy=name&order=desc returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users?orderBy=name&order=desc`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            done();
        });
    });

    it('GET Pagination - /users?pageSize=5&pageNumber=1 returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users?pageSize=5&pageNumber=1`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            done();
        });
    });

    it('GET Detail - /users/54 returns 200 with expected payload', (done) => {
        request.get(`${baseURL}/users/54`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response.statusCode).toEqual(200);
            expect(jsonBody).toBeDefined();

            done();
        });
    });

    it('GET Detail - /users/test returns 404 with expected payload', (done) => {
        request.get(`${baseURL}/users/test`, (error, response) => {
            const jsonBody = JSON.parse(response.body);

            expect(response).toBeDefined();
            expect(response.statusCode).toEqual(404);
            expect(jsonBody.error).toEqual(`Sorry, the id:test doesn't exists.`);

            done();
        });
    });
});