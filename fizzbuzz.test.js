const fizzBuzz = require("./fizzbuzz");

const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

describe('Interface fizzbuzzy', () => {

    test('Should be a function: ', () => {
        expect(fizzBuzz).toBeInstanceOf(Function);
    });

    test('Should return an array', () =>
    {
        expect(fizzBuzz()).toBeInstanceOf(Array);
    });

    test('Should return an array of 100 items', () =>{
        expect(fizzBuzz()).toHaveLength(100);
    });

    test('should return an array of 100 items from 1 to 100', () =>{
        const test = fizzBuzz();

        expect(test[0]).toBe(1);
        expect(test[3]).toBe(4);
        expect(test[7]).toBe(8);
        expect(test[10]).toBe(11);
        expect(test[12]).toBe(13);
        expect(test[45]).toBe(46);
        expect(test[67]).toBe(68);
        expect(test[72]).toBe(73);
        expect(test[87]).toBe(88);
        expect(test[97]).toBe(98);
    });

    test('should return fizz if a value is multiple of 3', () =>{
        const test = fizzBuzz();

        expect(test[2]).toBe(FIZZ);
        expect(test[5]).toBe(FIZZ);
        expect(test[8]).toBe(FIZZ);
        expect(test[11]).toBe(FIZZ);
        expect(test[26]).toBe(FIZZ);
        expect(test[47]).toBe(FIZZ);
        expect(test[68]).toBe(FIZZ);
        expect(test[71]).toBe(FIZZ);
        expect(test[92]).toBe(FIZZ);
        expect(test[98]).toBe(FIZZ);
    });

    test('should return Buzz if a value is multiple of 5', () =>{
        const test = fizzBuzz();

        expect(test[4]).toBe(BUZZ);
        expect(test[9]).toBe(BUZZ);
        expect(test[19]).toBe(BUZZ);
        expect(test[24]).toBe(BUZZ);
        expect(test[39]).toBe(BUZZ);
        expect(test[49]).toBe(BUZZ);
        expect(test[54]).toBe(BUZZ);
        expect(test[79]).toBe(BUZZ);
        expect(test[94]).toBe(BUZZ);
        expect(test[99]).toBe(BUZZ);
    });

    test('should return FizzBuzz if a value is multiple of 3 and 5', () =>{
        const test = fizzBuzz();

        expect(test[14]).toBe(FIZZ+BUZZ);
        expect(test[29]).toBe(FIZZ+BUZZ);
        expect(test[44]).toBe(FIZZ+BUZZ);
        expect(test[59]).toBe(FIZZ+BUZZ);
        expect(test[74]).toBe(FIZZ+BUZZ);
        expect(test[89]).toBe(FIZZ+BUZZ);
    });
})
