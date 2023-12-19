import { useEffect, useState } from "react";

import { CanceledError, PokemonResource } from "../services/api-client";
import pokemonService, { Pokemon } from "../services/pokemon-service";
import useFetch from "./useFetch";

function usePokemon() {
  const { data, error, isLoading, setData, setError } =
    useFetch<PokemonResource>(pokemonService);

  console.log(data);
  const pokemon = data?.map((d) => ({
    id: d.id,
    name: d.name,
    height: d.height,
    weight: d.weight,
    baseExperience: d.base_experience,
    abilityCount: 2,
    spriteURL: d.sprites.front_default,
  }));

  return { pokemon, error, isLoading, setError };
}

export default usePokemon;
