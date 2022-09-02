//#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

//for the seed asparagus: 

export const createAsparagus = () => {
    let crop = {
        type: "Asparagus",
        height: 24,
        output: 4,
    }
    return crop
}

//This function will return an object when invoked