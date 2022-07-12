import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => { 
    test('Axios debe de estar configurado con la url de Pokemon Api', () => {
        expect( pokemonApi.defaults.baseURL )
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
 })