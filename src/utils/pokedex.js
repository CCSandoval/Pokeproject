import axios from "axios";

export const getPokedexes = async (success, error) => {
  const options = {
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokedex?offset=0&limit=28",
  };
  await axios.request(options).then(success).catch(error);
};

export const getPokedex = async (success, error, url) => {
  const options = {
    method: "GET",
    url: url,
  };
  await axios.request(options).then(success).catch(error);
};
