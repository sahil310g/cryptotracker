import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} color={'white'} minH={'48'} px={'16'} py={['16','8']} >
    <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
        <VStack w='full' alignItems={['center','flex-start']} >
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} >Best crypto tracking app</Text>

        </VStack>
        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']} />
            <Text>Founder</Text>
        </VStack>
    </Stack>
  </Box>
}

export default Footer