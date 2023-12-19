import { useEffect, useState } from "react";

import { CanceledError, PokemonResource } from "../services/api-client";
import pokemonService, { Pokemon } from "../services/pokemon-service";

function usePokemon(id: number) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = pokemonService.getOne<PokemonResource>(id);
    request
      .then((response) => {
        setPokemon({
          id: response.data.id,
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          baseExperience: response.data.base_experience,
          abilityCount: 2,
          spriteURL: response.data.sprites.front_default,
        });
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { pokemon, error, isLoading, setPokemon, setError };
}

export default usePokemon;
