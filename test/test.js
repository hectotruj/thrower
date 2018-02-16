const thrower = require('../index')
const chai = require('chai')
const expect = chai.expect

describe('Thrower', function () {
    describe('#r()', function () {
        it('should throw: Malformed error. No error was provided.', function () {
            try {
                thrower.r()
            } catch (err) {
                expect(err.error).to.equal('NO_ERR')
                expect(err.description).to.equal('Malformed error. No error was provided.')
            }
        });
        it('should throw: Malformed error. Code provided does not correspond to any error.', function () {
            try {
                thrower.r('NODE_ERROR')
            } catch (err) {
                expect(err.error).to.equal('NODE_CODE')
                expect(err.description).to.equal('Malformed error. Code provided does not correspond to any error.')
            }
        });
        it('should throw: A required field is missing.', function () {
            try {
                thrower.r('FIELD_MISSING')
            } catch (err) {
                expect(err.error).to.equal('FIELD_MISSING')
                expect(err.description).to.equal('A required field is missing.')
                expect(err.message).to.be.undefined
            }
        });
        it('should throw: A required field is missing with a message', function () {
            try {
                thrower.r('FIELD_MISSING', 'Username is required.')
            } catch (err) {
                expect(err.error).to.equal('FIELD_MISSING')
                expect(err.description).to.equal('A required field is missing.')
                expect(err.message).to.equal('Username is required.')
            }
        });
    });
    describe('#get()', function () {
        it('should get: Malformed error. No error was provided.', function () {
            expect(thrower.get()).to.equal('Malformed error. No error was provided.')
        });
        it('should get: Malformed error. Code provided does not correspond to any error.', function () {
            expect(thrower.get('NO_ERROR')).to.equal('Malformed error. Code provided does not correspond to any error.')
        });
        it('should get: A required field is missing.', function () {
            expect(thrower.get('FIELD_MISSING')).to.equal('A required field is missing.')
        });
    });
});