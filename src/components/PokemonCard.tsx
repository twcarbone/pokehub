import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

import usePokemon from "../hooks/usePokemon";

interface Props {
  id: number;
}

function PokemonCard({ id }: Props) {
  console.log("Entering PokemonCard");
  const { pokemon, error, isLoading, setPokemon, setError } = usePokemon(id);

  return (
    <Card>
      <CardBody>
        <Center>
          <Image src={pokemon?.spriteURL} alt={pokemon?.name} />
        </Center>
        <Heading textAlign="center">{pokemon?.name}</Heading>
        <TableContainer>
          <Table variant="unstyled" size="sm">
            <Tbody>
              <Tr>
                <Td>Base Experience</Td>
                <Td>{pokemon?.baseExperience}</Td>
              </Tr>
              <Tr>
                <Td>Height</Td>
                <Td>{pokemon?.height}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{pokemon?.weight}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}

export default PokemonCard;
