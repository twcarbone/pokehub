import axios, { CanceledError } from "axios";

interface Resource {
  id: number;
}

interface AbilityResource extends Resource {
  name: string;
  effect_entries: [
    {
      effect: string;
      short_effect: string;
    },
  ];
}

interface PokemonResource extends Resource {
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilites: AbilityResource[];
  sprites: {
    front_default: string;
  };
}

export default axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export { CanceledError };
export type { AbilityResource, PokemonResource };
