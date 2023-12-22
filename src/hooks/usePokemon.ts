import { useEffect, useState } from "react";

import { CanceledError, PokemonResource } from "../services/api-client";
import pokemonService, { Pokemon } from "../services/pokemon-service";

function usePokemon(id: number) {
  console.log("Entering usePokemon");
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Running effect");
    setLoading(true);
    const { request, cancel } = pokemonService.getOne<PokemonResource>(id);
    request
      .then((response) => {
        console.log("Resolving promise");
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
        console.log("Rejecting promise");
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    console.log("Returning from effect");
    return () => cancel();
  }, []);

  console.log("Returning from usePokemon");
  return { pokemon, error, isLoading, setPokemon, setError };
}

export default usePokemon;
