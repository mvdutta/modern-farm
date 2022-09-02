


//taking the harvestBasket and for each plant, generate the HTML string

export const catalog = (harvestedPlants) => {
    let plantHTMLString = ''
    for (let plant of harvestedPlants) {//for each plant, adding the HTML code
            plantHTMLString += `<section class="${plant.type.toLowerCase()}">${plant.type}</section>`
    }
        return plantHTMLString
    
}