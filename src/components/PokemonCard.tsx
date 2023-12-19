import { Card, CardBody, CardFooter, CardHeader, Heading, Image } from "@chakra-ui/react";

import usePokemon from "../hooks/usePokemon";

interface Props {
  id: number;
}

function PokemonCard({ id }: Props) {
  const { pokemon, error, isLoading, setPokemon, setError } = usePokemon(id);

  return (
    <Card>
      <CardBody>
        <Image src={pokemon?.spriteURL} alt={pokemon?.name} />
        <Heading>{pokemon?.name}</Heading>
      </CardBody>
      <CardFooter>{error}</CardFooter>
    </Card>
  );
}

export default PokemonCard;
