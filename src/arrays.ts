/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const copy: number[] = [...numbers];
    const length = copy.length;
    const firstLast = (num: number[]): number[] =>
        length === 0 ? []
        : length === 1 ? [num[0], num[0]]
        : [num[0], num[length - 1]];
    return firstLast(copy);
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parsed = numbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
    );
    return parsed;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.slice(1) : amount,
    );
    const result = removed.map((amount: string): number =>
        parseInt(amount) ? parseInt(amount) : 0,
    );
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removedQuestion: string[] = messages.filter(
        (message: string): boolean => message.at(-1) !== "?",
    );
    const result: string[] = removedQuestion.map((message: string): string =>
        message.at(-1) === "!" ? message.toUpperCase() : message,
    );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWordsList: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shortWordsList.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const result: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return colors.length ? result : true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (currentTotal: number, num: number) => (currentTotal += num),
        0,
    );
    const convertString: string[] = addends.map((num: number): string =>
        num.toString(),
    );
    const joined: string = convertString.join("+");
    return addends.length ? sum.toString() + "=" + joined : "0=0";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copy: number[] = [...values];
    const negativeIndex: number = values.findIndex(
        (value: number): boolean => value < 0,
    );
    const sum: number =
        negativeIndex >= 0 ?
            copy
                .slice(0, negativeIndex)
                .reduce(
                    (currentTotal: number, num: number) =>
                        (currentTotal += num),
                    0,
                )
        :   copy.reduce(
                (currentTotal: number, num: number) => (currentTotal += num),
                0,
            );
    return negativeIndex >= 0 ?
            [
                ...values.slice(0, negativeIndex + 1),
                sum,
                ...values.slice(negativeIndex + 1),
            ]
        :   [...values, sum];
}
