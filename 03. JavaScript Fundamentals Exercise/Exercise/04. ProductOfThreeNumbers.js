function productOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let minuses = 0;

    if (firstNum == 0 || secondNum == 0 || thirdNum == 0) {
        return "Positive";
    } else {
        if (firstNum < 0) {
            minuses++;
        }

        if (secondNum < 0) {
            minuses++;
        }

        if (thirdNum < 0) {
            minuses++;
        }

        if (minuses % 2 == 0) {
            return "Positive";
        } else {
            return "Negative"
        }
    }
}