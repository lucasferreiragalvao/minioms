import { expect, should } from 'chai';
import { BAD_REQUEST } from 'http-status';
import { chai, server } from '../../index.spec';
import jsonSchemaError from './__SCHEMA__/jsonSchemaError.json';
// https://www.jsonschema.net/home

describe('Route POST /v1/customers', function() {
    it('Return HTTP Status Code 400 when body is missing', (done) => {
        chai.request(server)
            .post('/v1/customers')
            .end((err, res) => {
                expect(res).to.have.status(BAD_REQUEST);
                should().exist(res.body);
                expect(res.body).to.be.jsonSchema(jsonSchemaError);
                expect(res.body).to.have.property('statusCode', 400);
                expect(res.body).to.have.property('error', 'Bad Request');
                expect(res.body).to.have.property('message', 'Validation failed');
                expect(res.body.validation.body).to.have.property('source', 'body');
                expect(res.body.validation.body.keys).to.be.an('array').with.length(1);
                expect(res.body.validation.body.keys[0]).to.be.equal('name');
                expect(res.body.validation.body).to.have.property('message', '\"name\" is required');
                done();
            });
    });
    it('Return HTTP Status Code 400 when body.name is missing', (done) => {
        chai.request(server)
            .post('/v1/customers')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(BAD_REQUEST);
                should().exist(res.body);
                expect(res.body).to.be.jsonSchema(jsonSchemaError);
                expect(res.body).to.have.property('statusCode', 400);
                expect(res.body).to.have.property('error', 'Bad Request');
                expect(res.body).to.have.property('message', 'Validation failed');
                expect(res.body.validation.body).to.have.property('source', 'body');
                expect(res.body.validation.body.keys).to.be.an('array').with.length(1);
                expect(res.body.validation.body.keys[0]).to.be.equal('name');
                expect(res.body.validation.body).to.have.property('message', '\"name\" is required');
                done();
            });
    });
    it('Return HTTP Status Code 400 when body.name is not a string', (done) => {
        chai.request(server)
            .post('/v1/customers')
            .send({
                name: true
            })
            .end((err, res) => {
                expect(res).to.have.status(BAD_REQUEST);
                should().exist(res.body);
                expect(res.body).to.be.jsonSchema(jsonSchemaError);
                expect(res.body).to.have.property('statusCode', 400);
                expect(res.body).to.have.property('error', 'Bad Request');
                expect(res.body).to.have.property('message', 'Validation failed');
                expect(res.body.validation.body).to.have.property('source', 'body');
                expect(res.body.validation.body.keys).to.be.an('array').with.length(1);
                expect(res.body.validation.body.keys[0]).to.be.equal('name');
                expect(res.body.validation.body).to.have.property('message', '\"name\" must be a string');
                done();
            });
    });
});