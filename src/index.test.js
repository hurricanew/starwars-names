/**
 * Created by lwang on 17/4/17.
 */
const starwars = require('./index');
const expect = require('chai').expect;
describe('starwars-name', () => {
    describe('all',()=>{
        it('should return an array of strings', () => {
            expect(starwars.all).to.satisfy(isArrayOfStrings);
        })
        it('should contain an Ben Skywalker', () => {
            expect(starwars.all).to.include('Ben Skywalker');
        })
    });
    describe('random',()=>{
        it('should return an random item of strings', () => {
            var randomeItem = starwars.random();
            expect(starwars.all).to.include(randomeItem);
        })

    });
    function isArrayOfStrings(array){
        return array.every((item)=>{
            return typeof item === 'string';
        });
    }

    }
);