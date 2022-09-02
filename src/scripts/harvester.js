import { addPlant } from "./field.js"




export const harvestPlants = (plantsArray) => {
    let harvestBasket = []
    for (let plant of plantsArray) {
        // looping though each plant of plantsArray 
        let numberToHarvest = plant.output //this gives us the output number (or the number of plants to harvest)
        if (plant.type === 'Corn') {
            numberToHarvest = plant.output/2
        }
        for (let i = 0; i < numberToHarvest; i++) {
            //creating a for loop to add the plant the required number of times
            harvestBasket.push(plant)
        }         
    }
        return harvestBasket
}