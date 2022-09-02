 
    //#2 Creating Seeds: Export a function for creating a seed called create"name of seed". Each function returns an object with 3 properties, except corn, which should return an array with two identical objects in it.

//for the seed corn: 


export const createCorn = () => {
    let crop = [
    
    {
        type: "Corn",
        height: 180,
        output: 6,
    },
    {
        type: "Corn",
        height: 180,
        output: 6,
    }
]
    return crop
}
//this function returns an array with two objects