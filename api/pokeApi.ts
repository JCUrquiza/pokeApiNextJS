import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

// baseApi.get('/pokemon?limit=151');

export default pokeApi;

