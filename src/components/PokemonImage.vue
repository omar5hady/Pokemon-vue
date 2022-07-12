<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon"
            :src="imgSrc" 
            class="hidden-pokemon"
            alt="Pokemon">
        <img  v-else :src="imgSrc"
            class="fade-in"
            alt="Pokemon">
    </div>
    
</template>

<script>
export default {
    props:{
        pokemonId:{
            type: Number,
            required: true
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    data(){
        return{
            id : this.pokemonId,
        }
    },
    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
        }
    }
}
</script>

 <style scoped> 
    /* scoped es para que solo se aplicque en ese componente */
    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        /* position: absolute;
        right: 42%; */
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon{
        filter: brightness(0);
    }

</style>