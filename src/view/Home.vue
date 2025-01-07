<template>
  <div class="home">
    <h1>Pokémons</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <a @click="showDetails(pokemon.name)">{{ pokemon.name }}</a>
      </li>
    </ul>

    <div v-if="selectedPokemon">
      <h2>{{ selectedPokemon.name }}</h2>
      <img :src="selectedPokemon.sprites.front_default" alt="Image de Pokémon" />
      <p><strong>Poids :</strong> {{ selectedPokemon.weight }}</p>
      <p><strong>Taille :</strong> {{ selectedPokemon.height }}</p>
    </div>
  </div>


</template>

<script>
import pokeapi from "@/services/pokeapi";

export default {
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
    };
  },
  async created() {
    try {
      const response = await pokeapi.getPokemonList();
      this.pokemons = response.data.results;
    } catch (error) {
      console.error("Erreur lors de la récupération des Pokémon :", error);
    }
  },
  methods: {
    async showDetails(name) {
      try {
        const response = await pokeapi.getPokemonDetails(name);
        this.selectedPokemon = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  text-align: center;
}
li {
  margin: 30px 0;
  font-size: 30px;
}
a {
  cursor: pointer;
  color: blue;

}
</style>
