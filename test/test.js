const thrower = require('../index')
const chai = require('chai')
const expect = chai.expect

describe('Thrower', function () {
    describe('#r()', function () {
        it('should throw: Malformed error. No error was provided', function () {
            expect(thrower.r()).to.throw()
        });
    });
    describe('#get()', function () {
        it('should get: Malformed error. No error was provided', function () {
            expect(thrower.get()).to.equal('Malformed error. No error was provided')
        });
        it('should get: Malformed error. Please use an integer for an error code.', function () {
            expect(thrower.get('1000')).to.equal('Malformed error. Please use an integer for an error code.')
        });
        it('should get: Malformed error. Code provided does not correspond to any error.', function () {
            expect(thrower.get(900)).to.equal('Malformed error. Code provided does not correspond to any error.')
        });
        it('should get: A required field is missing.', function () {
            expect(thrower.get(1100)).to.equal('A required field is missing.')
        });
    });
});