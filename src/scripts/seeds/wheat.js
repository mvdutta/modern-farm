//#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

// for the wheat seed:


export const createWheat = () => {
    let crop = {
        type: "Wheat",
        height: 230,
        output: 6,
    }
    return crop
}