const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

function fizzBuzz() {
    const arrayAux = [];

    for (let i = 1; i < 101; i++) {

        if (i % 3 === 0 && i %5  == 0){
            arrayAux.push(FIZZ+BUZZ);
            continue;
        }

        if (i % 3 === 0) {
            arrayAux.push(FIZZ);
            continue;
        }
        if (i % 5 === 0) {
            arrayAux.push(BUZZ);
            continue;
        }
        arrayAux.push(i);
    }

    return arrayAux;
}

module.exports = fizzBuzz;