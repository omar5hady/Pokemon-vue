import { shallowMount } from '@vue/test-utils';
import PokemonImage from '@/components/PokemonImage'

describe('PokemonImage component', () =>{
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId : 1,
                showPokemon : false
            }
            
        })
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar la imagen oculta y el pokemon 150', () => {
        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId : 150,
                showPokemon : false
            }
            
        })

        //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg`

        const [img1, img2] = wrapper.findAll('img')

        //console.log(wrapper.vm.imgSrc)

        expect(wrapper.vm.imgSrc).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg')

        expect(img1.exists).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBe(true)
        expect(img2).toBe(undefined)

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg')
    })

    test('Debe mostrar la imagen del Pokemon si showPokemon:true', () => {
        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId : 150,
                showPokemon : true
            }
            
        })

        const img1 = wrapper.find('img')

        expect(img1.exists).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBe(true)
    })
})