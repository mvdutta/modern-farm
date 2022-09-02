//#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

// for the soybean seed:

export const createSoybean = () => {
    let crop = {
        type: "Soybean",
        height: 20,
        output: 4,
    }
    return crop
}