import React, {useEffect, useState} from "react";
import "./App.css";
import Pokeprofile from "./components/Pokeprofile.tsx";
import Pokegrid from "./components/Pokegrid.tsx";
import Navbar from "./components/Navbar.tsx";
import {Pokemon, PokemonType} from "./components/types.tsx";
import {FavouriteView} from "./components/FavoriteView.tsx";


const App: React.FC = () => {

    const getTypeFromSessionStorage = () => {
        const current_value = sessionStorage.getItem("type");
        if (current_value) {
            return {name: current_value}
        } else {
            return {name: "water"}
        }
    }
    const [activeType, setActiveType] = useState<PokemonType>(() => getTypeFromSessionStorage());
    const [activePokemon, setActivePokemon] = useState<Pokemon>({
        name: "charmander",
    });
    const [favoritesUpdated, setFavoritesUpdated] = useState<boolean>(false)

    useEffect(() => {
        sessionStorage.setItem("type", activeType.name) //this will run every time the user does anything. Might not be optimal
    }, [activeType, activePokemon]);

    useEffect(() => {
        setFavoritesUpdated(false)
    }, [favoritesUpdated]);

    return (
        <>
            <div className={"app"}>
                <Pokeprofile pokemon={activePokemon} updateFavoritesCallback={setFavoritesUpdated}/>
                <Navbar selectedType={activeType} filterCallback={setActiveType}/>
                <Pokegrid type={activeType.name} selectCallback={setActivePokemon}/>
                <FavouriteView shouldUpdate={favoritesUpdated}/>
            </div>
        </>
    );
};

export default App;
