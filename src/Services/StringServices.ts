export const spreadToString = (...nums: any[]): string => {
    let numStrings = nums.map(num => {
        return num.toString()
    })
    let string = numStrings.reduce((acc = '', str) => {
        return acc + str
    })
    return string;
}