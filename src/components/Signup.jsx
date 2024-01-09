import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={"center"}>Game Hub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />

          <Input
            placeholder={'Mustafa'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Abc@xyz.com'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme="purple" type={'submit'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up? {'  '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
