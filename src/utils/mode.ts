export const getMultiMode = (items: Array<number>): number[] => {
    // Go through the array
    type SetOfNumbers = {
        [key: string]: number
    }
    if (items.length === 0) return []

    const store: SetOfNumbers = {}

    let maxCount = 0;
    let res: number[] = [];

    items.forEach((item: number, index: number) => {
        if (!store[item]) {
            store[item] = 1
        } else {
            store[item] += 1
        }

        if(store[item] > maxCount) {
            maxCount = store[item]
        }
    })

    Object.keys(store).forEach(n => {
        if(store[n] === maxCount) {
            res.push(+n)
        }
    })

    return res
}
