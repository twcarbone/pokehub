import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Resource {
  id: number;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface NamedAPIResourceList {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export class FetchService {
  private static baseURL = "https://pokeapi.co/api/v2";

  private static get<Resource>(
    url: string,
    setData: (value: Resource) => void,
    config: object = {},
  ) {
    console.log("Entering get with url = " + url);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
      console.log("Running effect");
      setLoading(true);
      axios
        .get(url, { ...config, signal: controller.signal })
        .then((response) => {
          console.log("Resolving promise");
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Rejecting promise");
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      console.log("Returning from effect");
      // return () => controller.abort();
    }, []);

    console.log("Returning from get");
    return { error, isLoading };
  }

  static fetchOne<T extends Resource>(endpoint: string, id: number) {
    console.log("Entering fetchOne");
    const [data, setData] = useState<T>();
    const url = FetchService.baseURL + "/" + endpoint + "/" + id;
    const { error, isLoading } = FetchService.get<T>(url, setData);
    console.log("Returning from fetchOne");
    return { data, error, isLoading };
  }

  static fetchMany<NamedAPIResourceList>(endpoint: string) {
    const [data, setData] = useState<NamedAPIResourceList>();
    const url = FetchService.baseURL + "/" + endpoint;
    const { error, isLoading } = FetchService.get<NamedAPIResourceList>(url, setData);
    return { data, error, isLoading };
  }
}
