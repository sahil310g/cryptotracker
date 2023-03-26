import { Avatar, Box, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from '../assets/Photo.jpeg'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'48'} px={'16'} py={['16', '8']} >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w='full' alignItems={['center', 'flex-start']} >
          <Text fontWeight={'bold'}>About Us</Text>
          <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']} >Best crypto tracking app</Text>
        </VStack>
        <VStack>
          <Image boxSize={'28'} src={profile} borderRadius={'100%'}/>
          <Text fontWeight={'bold'}>Sahil Gupta</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer