import axios from "axios";

export const getPokemons = async (url, success, error) => {
  const options = {
    method: "GET",
    url: url,
  };
  await axios.request(options).then(success).catch(error);
};

export const getPokemon = async (success, error, url) => {
  const options = {
    method: "GET",
    url: url,
  };
  await axios.request(options).then(success).catch(error);
};
