let input = ['3', '0 - 5', '1 - 6', '2 - 7'];
// let input = ['2', '0 - 5', '0 - 6', '0 - 7'];
// let input = ['5', '0 - 3', '3 - -1', '4 - 2'];

function setValuesToIndexesInArray(input) {
    let arrLength = Number(input[0]);
    let arr = new Array(arrLength).fill(0);

    for (let i = 1; i < input.length; i++) {
        let inputTokens = input[i].split(" - ");
        let index = Number(inputTokens[0]);
        let value = Number(inputTokens[1]);

        arr[index] = value;
    }

    return arr;
}

function printResult(result) {
    for (let number of result) {
        console.log(number);
    }
}

let result = setValuesToIndexesInArray(input);
printResult(result);