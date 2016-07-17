function passwordQuestion() {
    return {
        type: 'password',
        message: 'Enter a password (min 8 characters)',
        name: 'password',
        validate: (password) => {
            if(password && password.length >= 8) {
                return true;
            }
            return false;
        }
    }
}

module.exports = passwordQuestion;