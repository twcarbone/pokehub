import usePokemon from "./hooks/usePokemon";

function App() {
  const { pokemon, error, isLoading, setPokemon, setError } = usePokemon();

  return <div></div>;
}

export default App;
