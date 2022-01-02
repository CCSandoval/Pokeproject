import React from "react";
import { useParams } from "react-router-dom";
const Pokemon = () => {
  const { name } = useParams();
  return <div>PokemonPage {name}</div>;
};

export default Pokemon;
