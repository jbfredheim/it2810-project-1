export type Pokemon = {
  name: string;
  types?: string[];
  url?: string;
};

export interface PokemonType {
  name: string;
}

export interface PokemonApiResponse extends Pokemon {
  abilities: Array<{ name: string; url: string }>;
  sprites: { front_default: string };
  weight: number;
  height: number;
}

export interface UseQueryResponse<T> {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  error: Error | null;
}
