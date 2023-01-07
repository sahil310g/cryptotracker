import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/logo.webp'
import { motion } from 'framer-motion'


const Home = () => {
  return <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >

    <motion.div style={{
      height:'80vh'
    }}
    animate={{
      translateY:"20px"
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse'
    }}
    > 
    <Image w={'full'} h={'full'} objectFit={'contain'} src={img}  filter={'grayscale(1)'} />
    
    <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'bold'} color={'whiteAlpha.700'} mt={['-20','0']}>
      Crypto Tracker
    </Text>
    </motion.div>
  </Box>
}

export default Home