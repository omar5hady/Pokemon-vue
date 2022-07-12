<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quien es este Pokemon?</h1>
        <div class="row">
            <h4 class="col-md-5">Puntuacion: {{puntuacion}}</h4>
            <h4 class="col-md-5">Vidas: 
                <img src="@/assets/vida.png" alt="" srcset="" width="20" height="20" :key="vida" v-for="vida in intentos">
            </h4>
        </div>
        <!-- Componente img Pokemon -->
        <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon"></PokemonImage>
        <!-- Componente opciones Pokemon -->
        <PokemonOpt 
            :pokemons="pokemonArr" 
            @selection-pokemon="checkAnswer($event)"
        ></PokemonOpt>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button @click="siguiente" v-if="intentos > 0">Otro pokemon</button>
            <button @click="newGame" v-if="intentos == 0">Nuevo juego</button>
        </template>
        
    </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOpt from '@/components/PokemonOpt.vue'

import getPokemonOpt from '@/helpers/getPokemonsOpt'

//console.log( getPokemonOpt() )

export default {
    components:{
        PokemonImage,
        PokemonOpt,
    },
    data(){
        return {
            pokemonArr :[], //Arreglo para opciones pokemon
            pokemon : null,
            showPokemon : false,
            showAnswer : false,
            message : '',
            puntuacion : 0,
            intentos : 3,
            activo : true,
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = []
            this.pokemon = null
            this.pokemonArr = await getPokemonOpt()

            const rndInt = Math.floor ( Math.random() * 4)

            this.pokemon = this.pokemonArr[rndInt]
        },
        //$event es el valor que esta retornando el selection
        checkAnswer( pokemonSelected) {
            this.showPokemon = true
            this.showAnswer = true

            if(this.activo){
                if(this.pokemon.id === pokemonSelected){
                    this.message = `Correcto es ${this.pokemon.name}`
                    this.puntuacion ++
                }
                    
                else{
                    this.message = `No es ${this.pokemon.name}`
                    this.intentos --
                }
            }

            this.activo = false
            
            
        },
        newGame(){
            this.activo = true
            this.conteo = 0
            this.puntuacion = 0
            this.intentos = 3
            this.siguiente()
        },
        siguiente(){
            this.activo = true
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
