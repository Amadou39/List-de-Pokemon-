<template>
  <div v-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <p><strong>Type :</strong> {{ pokemon.types[0].type.name }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  async created() {
    const pokemonName = this.$route.params.id;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      this.pokemon = response.data;
    } catch (error) {
      console.error('Erreur lors du chargement des détails du Pokémon :', error);
    }
  },
};
</script>
