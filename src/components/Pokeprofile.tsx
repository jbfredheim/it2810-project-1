import {Pokemon, PokemonApiResponse, UseQueryResponse} from "./types.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchJson} from "./Api.tsx";

import "./Pokeprofile.css";

interface PokeprofileProps {
    pokemon: Pokemon;

    updateFavoritesCallback(x: boolean): void
}


const Pokeprofile = ({pokemon, updateFavoritesCallback}: PokeprofileProps) => {

    function addFavourite(name: string) {
        const sessionData = localStorage.getItem("data");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const favorite_list: Array<{ name: string }> = sessionData ? JSON.parse(sessionData) : [];

        const isNameInList = favorite_list.some((item) => item.name === name);

        if (!isNameInList) {
            favorite_list.push({name: name});

            localStorage.setItem("data", JSON.stringify(favorite_list));
            updateFavoritesCallback(true)
        }
    }

    const {
        isLoading,
        isError,
        data,
        error,
    }: UseQueryResponse<PokemonApiResponse> = useQuery({
        queryKey: ["pokemon", pokemon.name],
        queryFn: () =>
            fetchJson<PokemonApiResponse>(
                "https://pokeapi.co/api/v2/pokemon/" + pokemon.name + "/",
            ),
    });
    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (isError) {
        return <span>Error: {error ? error.message : "unknown error"}</span>;
    }

    if (data) {
        return (
            <div id={"pokeprofile"} data-testid={"pokeprofile"}>
                <div id={"left-col"}>
                    <h2 data-testid={"profile-name"}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    {data ? (
                        <div id={"fun-facts"} data-testid={"fun-facts"}>
                            <h4>Fun facts;</h4>
                            <p>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}:
                            </p>
                            <ul>
                                <li>Has {data.abilities.length} abilites</li>
                                <li>Weighs {data.weight / 10} kg</li>
                                <li>Is {data.height * 10} cm tall</li>
                            </ul>
                            <button className="addFavourite" onClick={
                                () => {
                                    addFavourite(pokemon.name);
                                }
                            }>Add to favorites
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {data ? (
                    <img
                        className="profile-image"
                        src={data.sprites.front_default}
                        alt={"Image of pokemon " + pokemon.name}
                    ></img>
                ) : (
                    <p>Unable to find image</p>
                )}
            </div>
        );
    }


};

export default Pokeprofile;
