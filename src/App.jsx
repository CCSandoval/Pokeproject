import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedexes from "./pages/pokedexes/Pokedexes";
import Pokemons from "./pages/pokemons/Pokemons";
import Pokedex from "./pages/pokedexes/Pokedex";
import Index from "./pages/Index";
import NormalLayout from "./layouts/NormalLayout";
import "./styles/index.css";
import "./styles/animations.css";
import Pokemon from "./pages/pokemons/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalLayout />}>
          <Route path="pokedexes" element={<Pokedexes />} />
          <Route path="pokedexes/:id" element={<Pokedex />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="pokemons/:name" element={<Pokemon />} />
        </Route>
        <Route path="/" element={<Index />} index={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
