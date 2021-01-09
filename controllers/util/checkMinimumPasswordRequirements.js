const minLength = 8;

function checkMinimumPasswordRequirements(password) {
    if (password.length < minLength) {
        return false
    }

    return true;
}

module.exports = checkMinimumPasswordRequirements;