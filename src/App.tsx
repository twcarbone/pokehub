import { ChakraProvider } from "@chakra-ui/react";

import PokemonDashboard from "./components/PokemonDashboard";
import usePokemon from "./hooks/usePokemon";

function App() {
  return (
    <ChakraProvider>
      <PokemonDashboard />
    </ChakraProvider>
  );
}

export default App;
