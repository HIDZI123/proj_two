import {
  Box,
  Button,
  HStack,
  Text,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
  return (
    <Box
      bgColor={'black'}
      brightness={'900'}
      minH={'40'}
      p={'16'}
      color={'white'}
    >
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading textTransform={'uppercase'} size="md" textAlign={['center', 'left']}>
            Get latest updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Game Hub
          </Heading>
          <Text> All rights reserved </Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme="purple">
            <a href="http://www.youtube.com/@hidzi9047" target={'blank'}>
              YouTube
            </a>
          </Button>

          <Button variant={'link'} colorScheme="purple">
            <a
              href="http://instagram.com/_mustafasarangpurwala_"
              target={'blank'}
            >
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme="purple">
            <a href="https://github.com/HIDZI123" target={'blank'}>
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
