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
        it('should throw: Malformed error. No error was provided', function () {
            expect(thrower.get()).to.equal('Malformed error. No error was provided')
        });
    });
});