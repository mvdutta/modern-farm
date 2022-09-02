import { createPlan } from "./plan.js";
import {  addPlant, usePlants } from "./field.js"; //from Tilling the field
import { createAsparagus } from "./seeds/asparagus.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

//#1 Harvest Plan: imported function createPlan, invoked it and stored value in variable named yearlyPlan. Used console.log to output the value of yearlyPlan.
// const yearlyPlan = createPlan();
// console.log(yearlyPlan)

// //#3 Tilling the field: (testing)
// //step 1: create seed object by invoking createAsparagus, createCorn, etc functions
// let seedObj = createAsparagus()
// console.log(seedObj)

// //step 2: invoke addPlant() and specify the seed object as the argument. This will add objects to our plantsArray
// //this function doesn't return anything, so don't need to store it in a variable. Can just invoke it:
// addPlant(seedObj)

// //step 3: Invoke usePlants() and store its return value in a variable. This will provide a copy of plantsArray. Right now, this plantsArray will only contain asparagus object. This function doesn't need imputs because it makes a copy of the global variable, plantsArray defined in field.js.
// let fieldOfPlantsCopy = usePlants()
// console.log(fieldOfPlantsCopy)

// #4 Sowing the field: testing
//from the module plan.js, invoke the function createPlan(), which makes a plan for how the seeds are planted.
let newPlantingPlan = createPlan() //this function will make a plan and will store it in the variable newPlantingPlan. This function does not take any inputs.
//This newPlantingPlan is will be the input to the plantSeeds function we created in tractor.js.
// console.log(newPlantingPlan)
plantSeeds(newPlantingPlan) // gave the plan to plantSeeds from tractor.js

//#5 get the array of plants from the field module (usePlants)

let fieldCopy = usePlants() 
//pass this fieldCopy into our harvest function and get the harvested plants.
let harvest = harvestPlants(fieldCopy)
console.log(harvest)

//use catalog to generate the HTML string
let HTMLString = catalog(harvest)
console.log(HTMLString)

//put the HTML string in the appropriate place in index.HTML
document.querySelector(".catalog").innerHTML=HTMLString