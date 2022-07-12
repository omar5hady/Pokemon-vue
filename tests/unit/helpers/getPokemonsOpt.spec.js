import getPokemonOpt,{getPokemons, getPokemonNames} from '@/helpers/getPokemonsOpt'

describe('getPokemonsOpt helpers', () =>{
    test('Debe de regresar un arreglo de numeros', () => {
        const pokemons = getPokemons()

        //console.log(pokemons)
        expect( pokemons.length).toBe(650) //El arreglo debe de ser de 650.
        expect( pokemons[0]).toBe(1)//el primero es el numero 1
        expect(pokemons[500]).toBe(501)
    })

    test('Debe de retornar un arreglo de cuatro elementos con nombres de pokemons', async () =>{
        //const [p1, p2, p3, p4] = await getPokemonNames([1,2,3,4])
        const pokemons = await getPokemonNames([1,2,3,4])

        expect( pokemons ).toStrictEqual([
            {name : 'bulbasaur', id: 1},
            {name : 'ivysaur', id: 2},
            {name : 'venusaur', id: 3},
            {name : 'charmander', id: 4}
        ])

        // expect(p1.name).toBe('bulbasaur')
        // expect(p2.name).toBe('ivysaur')
        // expect(p3.name).toBe('venusaur')
        // expect(p4.name).toBe('charmander')
        
    })

    test('getPokemonOpt debe de retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOpt()
        //console.log(pokemons)

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name : expect.any(String), 
                id: expect.any(Number)
            },
            {
                name : expect.any(String), 
                id: expect.any(Number)
            },
            {
                name : expect.any(String), 
                id: expect.any(Number)
            },
            {
                name : expect.any(String), 
                id: expect.any(Number)
            },
        ])
    })
})