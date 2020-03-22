module.exports = function toReadable(number) {

    const DIGITS = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const TEENS = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    };

    const TENS = {
        0: ' ',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    let [digit, tens, hundreds] = number.toString().split('').reverse();

    return ((hundreds ? `${DIGITS[hundreds]} hundred ` : '')
        + (tens ? `${TENS[tens] || TEENS[digit]} ` : '')
        + ((tens !== '1' && digit) ? DIGITS[digit] : ''))
        .replace('  ', ' ')
        .replace('  ', ' ')
        .trim() || 'zero';

}
