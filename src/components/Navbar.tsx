import "./Navbar.css";
import { PokemonType } from "./types.tsx";

interface NavBarProps {
  filterCallback(type: PokemonType): void;
}

const Navbar = ({ filterCallback }: NavBarProps) => {
  return (
    <div className={"nav"}>
      <nav>
        <h1 id="Title">Pokedex</h1>
        <p id={"typechoice"}>Choose type:</p>
        <select
          name="Filter Type"
          id="type-selector"
          placeholder="Choose Type"
          onChange={(e) => {
            filterCallback({ name: e.target.value });
          }}
        >
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="normal">Normal</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
        {/*<input*/}
        {/*  type="submit"*/}
        {/*  value="Filter"*/}
        {/*  id="filterbutton"*/}
        {/*  onClick={(e) => {*/}
        {/*    console.log(e);*/}
        {/*  }}*/}
        {/*/>*/}
      </nav>
    </div>
  );
};

export default Navbar;
