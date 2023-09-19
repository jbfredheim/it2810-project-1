import "./Pokegrid.css";
import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "./Api.tsx";

interface PokeCellProps {
  name: string;
}

type Pokemon = {
  name: string;
  types?: string[];
  url?: string;
};

interface PokemonApiResponse extends Pokemon {
  abilities: Array<{ name: string; url: string }>;
  sprites: { front_default: string };
}

interface UseQueryResponse<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  error: Error | null;
}

const PokeCell = ({ name }: PokeCellProps) => {
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

  return (
    <div className="pokecell">
      <a
        onClick={() => {
          console.log("Clicked " + name);
        }}
      >
        {/*<img src={() => fetchData(name)}></img>*/}
        {data ? (
          <div>
            <img
              className="image"
              src={data["sprites"]["front_default"]}
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
  type?: string;
}

const Pokegrid = ({ type }: PokeGridProps) => {
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
    <div className={"pokegrid"}>
      {data &&
        data["pokemon"].map((result: { pokemon: Pokemon }, index: number) => {
          return <PokeCell key={index} name={result["pokemon"].name} />;
        })}
    </div>
  );
};
export default Pokegrid;
