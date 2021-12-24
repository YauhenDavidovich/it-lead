export const mean = (numbers: Array<number>) => {
    if(numbers.length) {
        return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    }
}

