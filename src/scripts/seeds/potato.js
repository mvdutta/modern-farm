//#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

// for the potato seed:

export const createPotato = () => {
    let crop = {
        type: "Potato",
        height: 32,
        output: 2,
    }
    return crop
}