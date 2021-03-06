import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../images/pokeball.svg";

const Navbar = () => {
  return (
    <nav className="flex p-1 bg-pokemon-red">
      <Link to="/">
        <img className="w-16" src={Pokeball} alt="pokeball" />
      </Link>
      <ul className="w-full flex justify-evenly items-center">
        <li className="navbarLink">
          <Link to="/pokemons">Pokémons</Link>
        </li>
        <li className="navbarLink">
          <Link to="/pokedexes">Pokédexes</Link>
        </li>
      </ul>
      <Link to="/">
        <img className="w-16" src={Pokeball} alt="pokeball" />
      </Link>
    </nav>
  );
};

export default Navbar;
