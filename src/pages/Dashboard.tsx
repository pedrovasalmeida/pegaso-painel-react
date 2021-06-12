import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/layout';
import { Header } from '../components/Header';
import { createEnterprise } from '../services/createEnterprise';
import { ICreateEnterprise } from '../types/IEnterprise';

export function Dashboard() {
  const handleEnterprises = async (data: ICreateEnterprise) => {
    const response = await createEnterprise(data);

    console.log(response);
  };

  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Flex w="100%" maxWidth={1600} my="6" mx="auto" px="4">
        {/* <Sidebar /> */}

        <Flex direction="column" w="100%">
          <Flex justify="space-between" w="100%">
            <Heading>Seja bem vindo!</Heading>
            <Button
              my="auto"
              ml="auto"
              bgColor="blue.700"
              color="gray.50"
              _hover={{ bgColor: 'blue.800' }}
              size="md"
              fontSize="sm"
              // onClick={handleManageEnterprise}
            >
              Gerenciar Obras
            </Button>
          </Flex>

          <Flex w="100%">
            {/* <ListEnterprises
              enterprises={enterprisesSSR}
              showDetailsButton
              showOnlyDetailsButton
            /> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
