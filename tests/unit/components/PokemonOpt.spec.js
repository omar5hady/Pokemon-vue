import { shallowMount } from "@vue/test-utils";
import PokemonOpt from '@/components/PokemonOpt'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOpt Component', () => {
    let wrapper 

    beforeEach( () => {
        wrapper = shallowMount( PokemonOpt, {
            props: {
                pokemons
            }
        })
    })

    test('Todo debe hacer match con el snapshot', () => {
        //console.log(wrapper.html())
        
        expect( wrapper.html()).toMatchSnapshot()
    })

    test('Mostrar las cuatro opciones correctamente', () => {

        const listPokemon = wrapper.findAll('li')
        expect(listPokemon.length).toBe(4)

        expect(listPokemon[0].text()).toBe('bulbasaur')
        expect(listPokemon[1].text()).toBe('ivysaur')
        expect(listPokemon[2].text()).toBe('venusaur')
        expect(listPokemon[3].text()).toBe('charmander')

    })

    test('Debe emitir "selection" con sus respectivos parametros al hacer click', () =>{
        const [li1,li2,li3,li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')


        console.log(wrapper.emitted('selectionPokemon'))

        expect(wrapper.emitted('selectionPokemon').length).toBe(4)
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1])
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2])
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3])
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4])
    })
})