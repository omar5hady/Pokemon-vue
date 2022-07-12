import { shallowMount, mount } from "@vue/test-utils";
import  PokemonPage  from "@/pages/PokemonPage";
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonPage Component', () =>{
    let wrapper 

    beforeEach( () => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe hacer match con el snapshot', () => {
        expect( wrapper.html()).toMatchSnapshot()
    })

    test('Se llama metodo mixPokemonArray al montar el componente', () => {
        const mixPokemonArraySpay = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect( mixPokemonArraySpay ).toHaveBeenCalled()
    })

    test('Debe hacer match con el snapshot al cargar los pokemons', () =>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return{
                    pokemonArr :pokemons, //Arreglo para opciones pokemon
                    pokemon : pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message : '',
                    puntuacion : 0,
                    intentos : 3,
                    activo : true,
                }
            }
        })
        expect( wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonImage y PokemonOpt', () =>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return{
                    pokemonArr :pokemons, //Arreglo para opciones pokemon
                    pokemon : pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message : '',
                    puntuacion : 0,
                    intentos : 3,
                    activo : true,
                }
            }
        })
        const pokemonImage = wrapper.findComponent('pokemon-image-stub')
        const pokemonOpt = wrapper.findComponent('pokemon-opt-stub')

        //PokemonPicture debe de existir
        expect(pokemonImage.exists()).toBe(true)
        //PokemonOpt debe de existir
        expect( pokemonOpt.exists()).toBe(true)

        //PokemonPicture attribute pokemonId === 1
        expect(pokemonImage.vm.pokemonId).toBe(1)

        //PokemonOpt attribute pokemons toBe true
        expect(pokemonOpt.vm.pokemons).toBeTruthy()
    })

    test('Pruebas con checkAnswer ',async ()=>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return{
                    pokemonArr :pokemons, //Arreglo para opciones pokemon
                    pokemon : pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message : '',
                    puntuacion : 0,
                    intentos : 3,
                    activo : false,
                }
            }
        })

        await wrapper.vm.checkAnswer(1)
        expect(wrapper.vm.showPokemon).toBeTruthy()

        console.log(wrapper.vm.pokemon)
    })
})