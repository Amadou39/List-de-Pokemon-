import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getPokemonList(limit = 150, offset = 0) {
        return apiClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
    },
    getPokemonDetails(name) {
        return apiClient.get(`/pokemon/${name}`);
    },
};
