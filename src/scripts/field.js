//#3: Tilling the field

//Step 1: Define a variable whose initial value is an empty array, which will store all of the plants that are growing in the field:

const plantsArray = [];

//Step 2: define and export a function named addPlant, which accepts one of the seed objects created in #2(Creating seeds) and will add the seed to the plantsArray array using .push method...however, corn is an array of objects, so must use the Array.isArray method to check if corn was passed in. 

export const addPlant = (seed) => {
    if (Array.isArray(seed)) { //checking to see if seed is an array
        //if seed is an array(true), push each element of the corn array into the plantsArray array.
        plantsArray.push(seed[0])
        plantsArray.push(seed[1])
    }
    else {//if seed is not an array, it is an object. Push the object into the plantsArray array.
        plantsArray.push(seed)
    }
}
 //Step 3: Goal is to create a clone of the plantsArray so that the data can be used without changing the original copyDefine and export a function called usePlants that returns a copy of the array of plants (plantsArray). 

export const usePlants = () => {
    let plantsArrayCopy = [] //create an empty array to store the copies of all the objects. 
    //create a for loop to loop though each plant(asparagus, etc)
    for (let plantObj of plantsArray) { //for each plant object in plantsArray:
        let plantCopy = {...plantObj} //make a copy of the plant object using spread operator(clones the properties of each object and puts them in a new object)
        plantsArrayCopy.push(plantCopy) //push plantCopy object into the plantsArrayCopy array
    }
    return plantsArrayCopy
}



