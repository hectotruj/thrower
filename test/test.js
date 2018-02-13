const thrower = require('../index')
const chai = require('chai')
const expect = chai.expect

describe('Thrower', function () {
    describe('#r()', function () {
        it('should throw: Malformed error. No error was provided.', function () {
            try {
                thrower.r()
            } catch (err) {
                expect(err.error).to.equal(1000)
                expect(err.message).to.equal('Malformed error. No error was provided.')
            }
        });
        it('should throw: Malformed error. Please use an integer for an error code.', function () {
            try {
                thrower.r('1000')
            } catch (err) {
                expect(err.error).to.equal(1001)
                expect(err.message).to.equal('Malformed error. Please use an integer for an error code.')
            }
        });
        it('should throw: Malformed error. Code provided does not correspond to any error.', function () {
            try {
                thrower.r(900)
            } catch (err) {
                expect(err.error).to.equal(1002)
                expect(err.message).to.equal('Malformed error. Code provided does not correspond to any error.')
            }
        });
        it('should throw: A required field is missing.', function () {
            try {
                thrower.r(1100)
            } catch (err) {
                expect(err.error).to.equal(1100)
                expect(err.message).to.equal('A required field is missing.')
            }
        });
    });
    describe('#get()', function () {
        it('should get: Malformed error. No error was provided.', function () {
            expect(thrower.get()).to.equal('Malformed error. No error was provided.')
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