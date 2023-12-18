import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export { CanceledError };
