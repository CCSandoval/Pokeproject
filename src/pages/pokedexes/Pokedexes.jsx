import React, { useState, useEffect } from "react";
import { getPokedexes } from "../../utils/pokedex";
import Pokeball from "../../images/pokeball.svg";
import { nanoid } from "nanoid";
import PokedexCard from "../../components/pokedexes/PokedexCard";

const Pokedexes = () => {
  const [pokedexes, setPokedexes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokedexes(
      (res) => {
        setPokedexes([...res.data.results]);
        setLoading(false);
        console.log(pokedexes);
      },
      () => {
        setError(true);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="w-3/4 mt-8 m-auto flex flex-col items-center justify-center">
        <img src={Pokeball} alt="loading" className="w-64 loadingAnimation" />
      </div>
    );
  }

  if (error) {
    return <div>Hubo un error cargando los pokémones</div>;
  }

  return (
    <div className="w-3/4 mb-8 sm:my-4 m-auto flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-4">
        {pokedexes.map((pokedex) => {
          return <PokedexCard key={nanoid()} pokedex={pokedex} />;
        })}
      </div>
    </div>
  );
};

export default Pokedexes;
