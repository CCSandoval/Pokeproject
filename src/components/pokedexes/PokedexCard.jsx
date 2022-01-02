import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../images/pokeball64.svg";
import { getPokedex } from "../../utils/pokedex";
import Pokedex128 from "../../images/pokedex128.png";
const PokedexCard = ({ pokedex }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokedexData, setPokedexData] = useState({});

  useEffect(() => {
    getPokedex(
      (res) => {
        setPokedexData(res.data);
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setError(true);
      },
      pokedex.url
    );
  }, []);

  return (
    <Link to={`/pokedexes/${pokedexData.id}`}>
      <div className="fadeIn h-72 w-full flex flex-col text-center items-center justify-between rounded-lg outline outline-2 hover:outline-4 outline-pokemon-blue-d">
        <h2 className="text-lg pb-3 bg-pokemon-blue-d w-full text-white font-pokemon">
          {pokedexData.id}
        </h2>
        <div className="h-full w-full flex flex-col justify-between items-center">
          <h1 className="text-xl bg-pokemon-blue w-full text-white p-2 font-pokemon tracking-widest">
            {`${pokedex.name.charAt(0).toUpperCase()}${pokedex.name.slice(
              1
            )}`.replace(/\-/g, " ")}
          </h1>
          <img src={Pokedex128} alt="pokedex_image" className="h-32 w-32" />
          {loading ? (
            <img
              src={Pokeball}
              alt="loading"
              className="w-16 my-auto loadingAnimation"
            />
          ) : (
            pokedexData.descriptions.map((desc) => {
              if (desc.language.name === "en") {
                return (
                  <h2 className="bg-pokemon-blue-d w-full rounded-b-lg text-white">
                    {desc.description.replace(/\//g, " ")}
                  </h2>
                );
              }
            })
          )}
        </div>
      </div>
    </Link>
  );
};

export default PokedexCard;
