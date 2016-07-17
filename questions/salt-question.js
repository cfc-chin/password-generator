function saltQuestion() {
    return {
        type: 'input',
        message: 'Enter length for password salt',
        name: 'saltLength',
        default: 10,
        validate: (saltLength) => {      
            const saltLen = parseInt(saltLength);
            if(Number.isInteger(saltLen) && saltLen > 0) {
                return true;
            }
            return false;
        }
    }
}

module.exports = saltQuestion;