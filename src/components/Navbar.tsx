import "./Navbar.css";
import {PokemonType} from "./types.tsx";

interface NavBarProps {
    selectedType: PokemonType;

    filterCallback(type: PokemonType): void;
}

const Navbar = ({selectedType, filterCallback}: NavBarProps) => {

    const types = ["fire", "water", "grass", "normal", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

    return (
        <div className={"nav"}>
            <nav>
                <h1 id="Title">Pokedex</h1>
                <p id={"typechoice"}>Choose type:</p>
                <select
                    name="Filter Type"
                    id="type-selector"
                    placeholder="Choose Type"
                    data-testid={"type-selector"}
                    onChange={(e) => {
                        filterCallback({name: e.target.value});
                    }}
                    defaultValue={selectedType.name}
                >
                    {types.map((type: string, index) => {
                        return (
                            <option
                                key={index}
                                value={type}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                        );
                    })}
                </select>
            </nav>
        </div>
    );
};

export default Navbar;
