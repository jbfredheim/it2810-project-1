import "./Pokegrid.css";
import {useQuery} from "@tanstack/react-query";
import {fetchJson} from "./Api.tsx";
import {Pokemon, PokemonApiResponse, UseQueryResponse} from "./types.tsx";


interface PokeCellProps {
    name: string;

    clickCallback(): void;
}

const PokeCell = ({name, clickCallback}: PokeCellProps) => {
    const {
        isLoading,
        isError,
        data,
        error,
    }: UseQueryResponse<PokemonApiResponse> = useQuery({
        queryKey: ["pokemon", name],
        queryFn: () =>
            fetchJson<PokemonApiResponse>(
                "https://pokeapi.co/api/v2/pokemon/" + name + "/",
            ),
    });
    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (isError) {
        return <span>Error: {error ? error.message : "unknown error"}</span>;
    }

    if (data && !data.sprites.front_default) {
        return;
    }

    return (
        <div className="pokecell">
            <a
                onClick={
                    clickCallback
                }
            >
                {/*<img src={() => fetchData(name)}></img>*/}
                {data ? (
                    <div>
                        <img
                            className="image"
                            src={data.sprites.front_default}
                            alt={"Image of pokemon " + name}
                        ></img>
                        {name}
                    </div>
                ) : (
                    "No image found for pokemon: " + name
                )}

            </a>

        </div>
    );
};

interface PokemonListApiResponse {
    pokemon: { pokemon: Pokemon }[];
}

interface PokeGridProps {
    type: string;

    selectCallback(resultElement: Pokemon): void;
}

const Pokegrid = ({type, selectCallback}: PokeGridProps) => {
    const {
        isLoading,
        isError,
        data,
        error,
    }: UseQueryResponse<PokemonListApiResponse> = useQuery({
        queryKey: ["pokemons", type],
        queryFn: () =>
            fetchJson<PokemonListApiResponse>(
                "https://pokeapi.co/api/v2/type/" + type + "?limit=10",
            ),
    });
    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (isError) {
        return <span>Error: {error ? error.message : "unknown error"}</span>;
    }

    return (
        <div id={"wrapper"}>
            <div className={"pokegrid"}>
                {data &&
                    data["pokemon"].map((result: { pokemon: Pokemon }, index: number) => {
                        return (
                            <PokeCell
                                key={index}
                                name={result.pokemon.name}
                                clickCallback={() => selectCallback(result.pokemon)}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
export default Pokegrid;
