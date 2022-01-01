import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemons/PokemonCard";
import { getPokemons } from "../../utils/pokemons/pokemons";
import { nanoid } from "nanoid";

const Index = () => {
  const [pokemons, setPokemons] = useState([]);
  const [requestUrl, setRequestUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const fetchPokemons = () => {
    getPokemons(
      (res) => {
        setPokemons((prev) => [...prev, ...res.data.results]);
        setRequestUrl(res.data.next.toString());
        console.log(res.data.next);
      },
      (err) => {
        console.log(err);
      },
      requestUrl
    );
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="w-3/4 mt-8 m-auto flex flex-col items-center justify-center">
      <div className="grid grid-cols-4">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={nanoid()} pokemon={pokemon} />;
        })}
      </div>
      <button onClick={() => fetchPokemons()}>Load more</button>
    </div>
  );
};

export default Index;
