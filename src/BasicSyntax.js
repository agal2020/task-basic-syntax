export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    for (let i = 0; i < str.length; ++i) {
        if (
            i + 1 < str.length &&
            romanToIntegerDigit(str[i]) < romanToIntegerDigit(str[i + 1])
        )
            result -= romanToIntegerDigit(str[i]);
        else result += romanToIntegerDigit(str[i]);
    }
    return result;
}

function romanToIntegerDigit(digit) {
    let result = 0;
    switch (digit) {
        case 'I':
            result = 1;
            break;

        case 'V':
            result = 5;
            break;

        case 'X':
            result = 10;
            break;

        case 'L':
            result = 50;
            break;

        case 'C':
            result = 100;
            break;

        case 'D':
            result = 500;
            break;

        case 'M':
            result = 1000;
            break;

        default:
            result = 0;
            break;
    }
    return result;
}
