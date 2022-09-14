function solution(n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test addTwoDigits

// alternative solution
