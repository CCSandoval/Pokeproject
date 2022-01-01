import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../images/pokeball.svg";

const Navbar = () => {
  return (
    <nav className="hidden sm:flex p-1 bg-pokemon-red">
      <Link to="/">
        <img className="w-16" src={Pokeball} alt="pokeball" />
      </Link>
      <ul className="w-full flex justify-evenly items-center">
        <li className="navbarLink">
          <Link to="/pokedexes">Pokédexes</Link>
        </li>
        <li className="navbarLink">
          <Link to="/pokemons">Pokémones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
