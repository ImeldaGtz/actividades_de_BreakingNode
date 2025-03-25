async function buscarPokemon(pokemonABuscar) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonABuscar;
    try {
        const resultado = await fetch(url);
        const data = await resultado.json();
        return data;
    }
    catch (err) {
        console.error('Error al buscar el Pokemon: ', err.message);
    return null;
    }
};

async function imprimirBusqueda() {
    const argumentos = process.argv;
    if (argumentos.length < 3) {
        console.log('Debes ingresar el nombre de un Pokemon porfa');
        process.exit(1);
    } else if (argumentos.length > 3) {
        console.log('Solo un pokemon porfa... ');
        process.exit(1);
    } else {
        const pokemon = process.argv[2];
        const pokemonData = await buscarPokemon(pokemon);
        if (pokemonData) {
            const pokemonTable = {
                nombre: pokemonData.name,
                altura: pokemonData.height,
                peso: pokemonData.weight,
                habilidades: pokemonData.abilities.map(ability => ability.ability.name).join(', '),
                tipos: pokemonData.types.map(type => type.type.name).join(', ')
            }
            console.table(pokemonTable);
        }
    }
}

imprimirBusqueda();