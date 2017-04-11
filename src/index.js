const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');

module.exports = {
    all : starWarsNames,
    random : uniqueRandomArray(starWarsNames)
};