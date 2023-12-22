import { ChakraProvider } from "@chakra-ui/react";

import PokemonDashboard from "./components/PokemonDashboard";
import usePokemon from "./hooks/usePokemon";

function App() {
  console.log("Entering App");
  return (
    <ChakraProvider>
      <PokemonDashboard />
    </ChakraProvider>
  );
}

export default App;
