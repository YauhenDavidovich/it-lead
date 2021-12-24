export const getMode = (items: Array<number>) => {
    // Go through the array
    type ObjectNumbers = {
        index: number;
    }
    if (items.length === 0) return -1 // error

    const store = {} as ObjectNumbers
    let maxCount = 0;
    let maxIndex = -1;

    items.forEach((item: number, index: number) => {

        // @ts-ignore
        if (!store[item]) {store[item] = 0}

        // update value
        // @ts-ignore
        store[item] += 1

        // @ts-ignore
        if (store[item] > maxCount) {
            maxIndex = index
            // @ts-ignore
            maxCount = store[item]
        }
    })

    // NOTE: this code does not consider if there are two modes.

    return items[maxIndex]
}
