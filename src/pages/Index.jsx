import React from "react";
import { Link } from "react-router-dom";
import IndexLayout from "../layouts/IndexLayout";
import Pokeball64 from "../images/pokeball64.svg";
import Pokedex128 from "../images/pokedex128.png";

const Index = () => {
  return (
    <IndexLayout>
      <div className="flex h-full justify-center items-center gap-3">
        <Link to="/pokemons">
          <div className="flex flex-col items-center justify-center p-6 hover:scale-110 duration-500 shadow-spread rounded-md hover:shadow-gray-400">
            <img src={Pokeball64} className="w-64" alt="Pokeball" />
            <p className="text-3xl font-pokemon text-pokemon-yellow tracking-wider">
              See all the pokemons
            </p>
          </div>
        </Link>
        <Link to="/pokedexes">
          <div className="flex flex-col items-center justify-center p-6 hover:scale-110 duration-500 shadow-spread rounded-md hover:shadow-gray-400">
            <img src={Pokedex128} className="w-64" alt="" />
            <p className="text-3xl font-pokemon text-pokemon-yellow tracking-wider">
              See all the pokedexes
            </p>
          </div>
        </Link>
      </div>
    </IndexLayout>
  );
};

export default Index;
