//#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

// for the sunflower seed:



export const createSunflower = () => {
    let crop = {
        type: "Sunflower",
        height: 380,
        output: 3,
    }
    return crop
}