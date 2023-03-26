import { Button, Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Flex bgColor={'blackAlpha.900'} p={'5'}>
        <Box>
          <Button variant={'unstyled'} color={'white'}>
            <Link to={'/'} style={{ fontSize: 'x-large' }}>Home</Link>
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button variant={'unstyled'} color={'white'}>
            <Link to={'/exchanges'} style={{ fontSize: 'larger' }}>Exchanges</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'} marginLeft={'10'} marginRight={'10'}>
            <Link to={'/coins'} style={{ fontSize: 'larger' }}>Coins</Link>
          </Button>
        </Box>
      </Flex>
    </>
  )
}

export default Header 