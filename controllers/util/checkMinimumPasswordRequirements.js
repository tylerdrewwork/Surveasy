const minLength = 8;

function checkMinimumPasswordRequirements(password) {
    // Check if password meets minimum length
    if (password.length < minLength) { return false; }

    // Check that password has lower case letter
    const hasLowercase = password.search(/[a-z]/);
    if (hasLowercase === -1) { return false; }

    // Check that password has upper case letter
    const hasUppercase = password.search(/[A-Z]/);
    if (hasUppercase === -1) { return false; }

    // Check that password has number
    const hasNumber = password.search(/[0-9]/);
    if (hasNumber === -1) { return false; }

    return true;
}

module.exports = checkMinimumPasswordRequirements;