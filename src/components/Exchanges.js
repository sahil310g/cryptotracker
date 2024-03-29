import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, Heading, HStack, Image, Text, VStack, Button } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }
  const btns= new Array(4).fill(1)

  const totalPages = 4;

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges/?page=${page}`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchExchanges();
  }, [page])

  if(error) return <ErrorComponent message={'Error while fetching exchanges'} />

  const handlePrevClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (

    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {exchanges.map((i) => (
              <a href={i.url} target={'_blank'}>
                <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.5s'} m={'4'}
                  css={{
                    "&:hover": {
                      transform: "scale(1.1)",
                    }
                  }} >
                  <Image src={i.image} w={'10'} h={'10'} objectFit={'contain'} alt={"Exchange"} />

                  <Heading size={'md'} noOfLines={1} >{i.trust_score_rank}</Heading>
                  <Text noOfLines={1} >{i.name}</Text>
                </VStack>
              </a>
            ))}
          </HStack>
          <HStack w='full' overflowX={'auto'} p={'8'} justifyContent='center'>
            {/* {
              btns.map((item,index)=>(
                <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>

              ))
            } */}
            {page>1 &&
              <Button onClick={handlePrevClick} disabled={page === 0}>
                Previous
              </Button>
            }
            { page>1 && 
            <Button bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(page - 1)}>{page-1}</Button>
            }
            <Button bgColor={'blackAlpha.500'} color={'white'}>{page}</Button>
            { page<3 && 
            <Button bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(page + 1)}>{page + 1}</Button>
            }

            {page < 3 &&
              <Button onClick={handleNextClick} disabled={page === totalPages - 1}>
                Next
              </Button>
            }
          </HStack>
        </>
      )}
    </Container>
  )
}


export default Exchanges