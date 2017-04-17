const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
    all : starWarsNames,
    random : random
};
function random(number){
    if(number===undefined){
        return getRandomItem();
    }else{
        let randomItems = [];
        for(let i=0;i<number;i++){
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }

}