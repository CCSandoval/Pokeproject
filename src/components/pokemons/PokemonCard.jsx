import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/pokemons/pokemons";
import Pokeball from "../../images/pokeball64.svg";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPokemon(
      (res) => {
        setPokemonData(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      },
      (err) => {
        console.log("err", err);
      },
      pokemon.url
    );
  }, []);

  return (
    <div className="fadeIn w-full h-32 flex flex-col items-center justify-between rounded-lg outline outline-2 hover:outline-4 outline-pokemon-blue-d">
      {loading ? (
        <img
          src={Pokeball}
          alt="loading"
          className="w-16 my-auto loadingAnimation"
        />
      ) : (
        <img
          src={pokemonData.sprites.front_default}
          alt={pokemon.name}
          className="h-full my-auto swirlInFwd"
        />
      )}
      <h1 className="bg-pokemon-blue-d p-1 w-full text-center text-lg text-white rounded-b-lg">
        {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
      </h1>
    </div>
  );
};

export default PokemonCard;
