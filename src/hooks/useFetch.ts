import { useEffect, useState } from "react";

import { CanceledError, PokemonResource } from "../services/api-client";
import pokemonService, { Pokemon } from "../services/pokemon-service";

function useFetch<T>(service: any) {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = service.getAll();
    request
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { data, error, isLoading };
}

export default useFetch;
