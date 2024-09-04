import * as _ from 'lodash'

export const generateUniqueRandomNumbers = (min, max, count) => {
    if (Number(max) - Number(min) + 1 < Number(count)) {
        return [];
    }

    const randomNumbers = new Set();
    while (randomNumbers.size < Number(count)) {
        const randomNum = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        randomNumbers.add(randomNum);
    }
    return Array.from(randomNumbers);
}

export const isEmptyValue = (value) => !_.isNumber(value) && !_.isBoolean(value) && _.isEmpty(value)
