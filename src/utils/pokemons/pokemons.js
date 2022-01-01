import axios from "axios";

export const getPokemons = async (success, error, url) => {
  const options = {
    method: "GET",
    url: url,
  };
  axios.request(options).then(success).catch(error);
};

export const getPokemon = async (success, error, url) => {
  const options = {
    method: "GET",
    url: url,
  };
  axios.request(options).then(success).catch(error);
};
