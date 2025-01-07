<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const pokemon = ref(null);
const route = useRoute();

onMounted(async () => {
  const pokemonName = route.params.id;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    pokemon.value = response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des détails du Pokémon :', error);
  }
});
</script>

<template>
  <div v-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>
