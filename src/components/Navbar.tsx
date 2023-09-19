import React from 'react'
import './Navbar.css';

export const Navbar : React.FC = () => {
    return (
        <div>
            <nav>
                <h1 id="Title">pokedex</h1>
                <select name="Filter Type" id="typing" placeholder='Choose Type'>
                    <option value="Fire">Fire </option>
                    <option value="Water">Water </option>
                    <option value="Grass">Grass </option>    
                    <option value="Normal">Normal </option>
                    <option value="Electric">Electric </option>
                    <option value="Ice">Ice </option>
                    <option value="Fighting">Fighting </option>
                    <option value="Poison">Poison </option>
                    <option value="Ground">Ground </option>
                    <option value="Flying">Flying </option>
                    <option value="Psychic">Psychic </option>
                    <option value="Bug">Bug </option>
                    <option value="Rock">Rock </option>
                    <option value="Ghost">Ghost </option>
                    <option value="Dragon">Dragon </option>
                    <option value="Fire">Dark </option>
                    <option value="Water">Steel </option>
                    <option value="Grass">Fairy </option>     
                        
                </select>
                <input type="submit" value="Filter" id="filterbutton"/>
            </nav>
        </div>
    );
};
