function AuthController () {

    var roles;

    function setroles(role) {
        roles = role;
    }
    function isAuthorized(roles, needsRole) {
        return roles.indexOf(needsRole) >=0;
    }
    function isAuthorizedAsync(roles, needsRole, cb) {
        setTimeout(function(){cb(roles.indexOf(needsRole) >= 0)}, 0);
    }
    return {isAuthorized, isAuthorizedAsync, setroles};
}
module.exports = AuthController();