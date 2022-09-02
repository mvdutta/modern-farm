




export const catalog = (harvestedPlants) => {
    let plantHTMLString = ''
    for (let plant of harvestedPlants) {
            plantHTMLString += `<section class="${plant.type.toLowerCase()}">${plant.type}</section>`
    }
        return plantHTMLString
    
}