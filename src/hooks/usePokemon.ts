import { useEffect, useState } from "react";

import { FetchService, Resource } from "../services/fetch-service";

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

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  abilityCount: number;
  spriteURL: string;
}

function usePokemon() {
  console.log("Entering usePokemon");
  const { data, error, isLoading } = FetchService.fetchOne<PokemonResource>("pokemon", 1);

  const pokemon = {};

  console.log("Returning from usePokemon");
  return { pokemon, error, isLoading };
}

export default usePokemon;
