export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(object => object.name.startsWith(searchName))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type == selectType)
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => pokemon.resistant == selectResistant)
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => pokemon.weaknesses == selectWeaknesses)
}