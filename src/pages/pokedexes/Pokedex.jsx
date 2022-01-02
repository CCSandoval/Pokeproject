import React from "react";
import { useParams } from "react-router-dom";
const Pokedex = () => {
  const { id } = useParams();
  return <div>PokedexPage {id}</div>;
};

export default Pokedex;
