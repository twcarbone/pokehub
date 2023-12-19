import { SimpleGrid } from "@chakra-ui/react";

import PokemonCard from "./PokemonCard";

function PokemonDashboard() {
  return (
    <SimpleGrid columns={4} spacing={10}>
      <PokemonCard id={1} />
    </SimpleGrid>
  );
}

export default PokemonDashboard;
