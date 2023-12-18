import { useEffect, useState } from "react";

import { CanceledError } from "../services/api-client";
import pokemonService, { Pokemon } from "../services/pokemon-service";

function useUsers() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = pokemonService.getAll<Pokemon>();
    request
      .then((response) => {
        setPokemon(response.data);
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

export default useUsers;
