import React, { useEffect, useState } from "react";
import "./App.css";
import Pokeprofile from "./components/Pokeprofile.tsx";
import Pokegrid from "./components/Pokegrid.tsx";
import Navbar from "./components/Navbar.tsx";
import { Pokemon, PokemonType } from "./components/types.tsx";

const App: React.FC = () => {
  const [activeType, setActiveType] = useState<PokemonType>({ name: "fire" });
  const [activePokemon, setActivePokemon] = useState<Pokemon>({
    name: "charmander",
  });

  useEffect(() => {}, [activeType, activePokemon]);

  return (
    <>
      <div className={"app"}>
        <Pokeprofile pokemon={activePokemon} />
        <Navbar filterCallback={setActiveType} />
        <Pokegrid type={activeType.name} selectCallback={setActivePokemon} />
      </div>
    </>
  );
};

export default App;
