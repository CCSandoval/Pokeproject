import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedexes from "./pages/pokedexes/Index";
import Pokemons from "./pages/pokemons/Index";
import Index from "./pages/Index";
import NormalLayout from "./layouts/NormalLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalLayout />}>
          <Route path="" element={<Index />} />
          <Route path="pokedexes" element={<Pokedexes />} />
          <Route path="pokemons" element={<Pokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
