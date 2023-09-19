import React, { useState } from "react";
import "./App.css";
import Pokegrid from "./components/Pokegrid.tsx";

interface PokemonType {
  name: string;
}

const App: React.FC = () => {
  const [activeType, setActiveType] = useState<PokemonType>({ name: "water" });

  return (
    <>
      <Pokegrid type={activeType.name} />
    </>
  );
};

export default App;
