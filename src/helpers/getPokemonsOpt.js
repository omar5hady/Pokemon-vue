import pokemonApi from "@/api/pokemonApi"

export const getPokemons = () => {
    const arrayPokemon = Array.from( Array(650) )

    return arrayPokemon.map( ( _ , index ) => index+1 )
    
}

export const getPokemonNames = async ( [a,b,c,d] = []) => {
    
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name)

    //Arreglo de promesas
    const arrPromise = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    // Ayuda a disparar varias promesas de manera simultanea, recibe como argumento un arreglo de promesas
    const [p1, p2, p3, p4] = await Promise.all( arrPromise )
    
    return[
        {   name: p1.data.name, id: p1.data.id   },
        {   name: p2.data.name, id: p2.data.id   },
        {   name: p3.data.name, id: p3.data.id   },
        {   name: p4.data.name, id: p4.data.id   }
    ]

}


const getPokemonOpt = async () => {
    const mixPokemon = getPokemons().sort( () => Math.random() - 0.5 )
    
    const pokemons = await getPokemonNames( mixPokemon.splice(0,4))

    //console.table(pokemons)

    return pokemons

}

export default getPokemonOpt