import React, { useEffect, useState } from "react";
import { getPokemon } from "../../utils/pokemons/pokemons";
const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPokemon(
      (res) => {
        setPokemonData(res.data);
        setLoading(false);
      },
      (err) => {
        console.log("err", err);
      },
      pokemon.url
    );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={pokemonData.sprites.front_default} alt="pokemon_image" />
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonCard;
