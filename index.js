'use strict'

const inquirer = require('inquirer');
const bcryptjs = require('bcryptjs');
const passwordQuestion = require('./questions/password-question')();
const saltQuestion = require('./questions/salt-question')();

const questions = Array.prototype.concat(passwordQuestion, saltQuestion);

console.log('Hi there, welcome to the password generator! Let\'s get started:\n');

inquirer.prompt(questions).then((answers) => {
    answers.saltLength = parseInt(answers.saltLength);
    const hash = bcryptjs.hashSync(answers.password, answers.saltLength);
    console.log('\nhashed password:', hash);
    console.log('\nCongratulations, you\'ve successfully generated an awesome super secret password!\n')
});