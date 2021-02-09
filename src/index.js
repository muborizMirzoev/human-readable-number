module.exports = function toReadable(number) {

    const readableNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        15: 'fifteen',
        18: 'eighteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    let str = number.toString();
    const decimal = (n) => {
        let decimalStr = n.toString()
        if (readableNumbers.hasOwnProperty(n)) return readableNumbers[n];
        if (n >= 14 && n <= 19) {

            return readableNumbers[decimalStr.slice(1, 2)] + 'teen'
        }
        if (n >= 20 && n < 100) {
            if (readableNumbers.hasOwnProperty(n)) return readableNumbers[n];
            return readableNumbers[decimalStr.slice(0, 1) + 0] + ' ' + readableNumbers[decimalStr.slice(1, 2)]
        }
    }

    if (number >= 0 && number <= 99) {
        return decimal(number)
    }

    if (number >= 100 && number <= 999) {
        if (str.slice(1, str.length) === '00') {
            return readableNumbers[str.slice(0, 1)] + ' hundred';
        }
        if (str.slice(1, 2) === '0') {
            return readableNumbers[str.slice(0, 1)] + ' hundred ' + decimal(str.slice(2, str.length));
        }
        console.log(+str.slice(1, str.length));
        return readableNumbers[str.slice(0, 1)] + ' hundred ' + decimal(+str.slice(1, str.length));
    }
}
