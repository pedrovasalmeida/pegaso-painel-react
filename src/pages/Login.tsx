import {
  Flex,
  Image,
  IconButton,
  Text,
  Stack,
  Button,
  useToast,
  useColorModeValue,
  useColorMode,
  Icon,
} from '@chakra-ui/react';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

import { BsMoon, BsSun } from 'react-icons/bs';

import PegasoLogo from '../assets/pegaso-logo.png';
import { useHistory } from 'react-router';

type SignInFormData = {
  login: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  login: yup.string().required('Login obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export function LoginPage() {
  // const { signIn, user, isLoadingSignIn } = useAuth();
  const toast = useToast();
  const history = useHistory();

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.900', 'gray.50');
  const bgColor = useColorModeValue('gray.100', 'gray.800');

  const handleSignIn = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: `Login efetuado.`,
      description: 'Entrando...',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    history.push('/dashboard');
  };

  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Image src={PegasoLogo} alt="Pégaso" mb="2" pointerEvents="none" />
      <Flex
        align="center"
        justify="center"
        onClick={toggleColorMode}
        cursor="pointer"
        mr="2"
        mb="2"
        borderRadius={8}
        color="whiteAlpha.900"
      >
        <IconButton
          aria-label="Change theme"
          color={color}
          icon={<Icon as={colorMode === 'dark' ? BsMoon : BsSun} />}
          fontSize="16"
          my="auto"
          variant="unstyled"
        />
        <Text width="100px" color={color}>
          Modo {colorMode === 'dark' ? 'escuro' : 'claro'}
        </Text>
      </Flex>

      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        flexDir="column"
        p={8}
        mx="5"
        borderRadius={8}
        bg={bgColor}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="text"
            label="Login"
            error={errors.login}
            {...register('login')}
          />
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          bgColor="blue.700"
          color="gray.50"
          _hover={{ bgColor: 'blue.800' }}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
      <Text mt="4" alignSelf="center">
        Pégaso - 2021 &copy;
      </Text>
    </Flex>
  );
}
