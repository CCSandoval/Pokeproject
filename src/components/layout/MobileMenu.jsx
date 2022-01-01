import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isDeployed, setIsDeployed] = useState(false);
  return (
    <>
      <div className="sm:hidden h-full p-1 absolute right-0 flex flex-col items-end">
        <i
          onClick={() => setIsDeployed(!isDeployed)}
          className="fas fa-bars text-xl"
        />
        <div
          className={`scaleInRight right-0 text-right ${
            isDeployed ? "mobileDeployed" : "hidden"
          }`}
        >
          <ul>
            <li className="mobileMenuLink">
              <Link to="/">Home</Link>
            </li>
            <li className="mobileMenuLink">
              <Link to="/pokedexes">Pokédexes</Link>
            </li>
            <li className="mobileMenuLink">
              <Link to="/pokemons">Pokémones</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
