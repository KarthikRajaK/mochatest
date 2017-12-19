var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;

describe('Authcontroller', function() {
    beforeEach(function() {
        console.log('running before Each');
        authController.setroles(['user']);
    });
    describe('isAuthenticated', function() {        
        it('should return false if not authorized', function() {
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        });
        it('should return true if authorized', function() {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });
        it('should not allow get if not authorized');
        it('should allow get if authorized');
    });
    describe('isAuthenticatedAsync', function() {
        it('should return false if not authorized', function(done) {
            authController.isAuthorizedAsync(['user'],'admin', 
                function(isAuth) {
                    assert.equal(false, isAuth);
                    done();
                }
            )
        });
    });
});