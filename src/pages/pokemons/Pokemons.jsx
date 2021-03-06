import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemons/PokemonCard";
import { getPokemons } from "../../utils/pokemons";
import { nanoid } from "nanoid";
import Pokeball from "../../images/pokeball.svg";

const Index = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const loadNextPage = () => {
    getPokemons(
      nextPage,
      (res) => {
        setPokemons([...res.data.results]);
        setPage(page + 1);
        setLoading(false);
        setPreviousPage(res.data.previous);
        setNextPage(res.data.next);
      },
      (err) => {
        setError(true);
      }
    );
  };

  const loadPreviousPage = () => {
    getPokemons(
      previousPage,
      (res) => {
        setPokemons([...res.data.results]);
        setLoading(false);
        setPage(page - 1);
        setPreviousPage(res.data.previous);
        setNextPage(res.data.next);
      },
      (err) => {
        setError(true);
      }
    );
  };

  useEffect(() => {
    getPokemons(
      "https://pokeapi.co/api/v2/pokemon",
      (res) => {
        setPage(1);
        setPokemons([...res.data.results]);
        setLoading(false);
        setPreviousPage(res.data.previous);
        setNextPage(res.data.next);
      },
      (err) => {
        setError(true);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="w-3/4 h-full mt-8 m-auto flex flex-col items-center justify-center">
        <img src={Pokeball} alt="loading" className="w-64 loadingAnimation" />
      </div>
    );
  }

  if (error) {
    return <div>Hubo un error cargando los pokémones</div>;
  }

  return (
    <div className="w-3/4 mb-8 sm:my-4 m-auto flex flex-col items-center justify-center">
      <div className="w-full flex justify-evenly text-center text-xl mb-3">
        {previousPage ? (
          <button
            className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl duration-300 hover:shadow-gray-300 shadow-spread hover:scale-105"
            onClick={() => loadPreviousPage()}
          >
            Previous Page
          </button>
        ) : (
          <div className="w-full"></div>
        )}
        <p className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl">
          Page: {page}
        </p>
        {nextPage && (
          <button
            className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl duration-300 hover:shadow-gray-300 shadow-spread hover:scale-105"
            onClick={() => loadNextPage()}
          >
            Next Page
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-4">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={nanoid()} pokemon={pokemon} />;
        })}
      </div>
      <div className="w-full flex justify-evenly text-center text-xl mt-3">
        {previousPage ? (
          <button
            className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl duration-300 hover:shadow-gray-300 shadow-spread hover:scale-105"
            onClick={() => loadPreviousPage()}
          >
            Previous Page
          </button>
        ) : (
          <div className="w-full"></div>
        )}
        <p className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl">
          Page: {page}
        </p>
        {nextPage && (
          <button
            className="w-full p-2 rounded-lg  font-pokemon tracking-wider text-xl duration-300 hover:shadow-gray-300 shadow-spread hover:scale-105"
            onClick={() => loadNextPage()}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
