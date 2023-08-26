import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }
  const totalPages = 132;

  const btns = new Array(totalPages).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchCoins();
  }, [currency, page])

  if (error) return <ErrorComponent message={'Error while fetching coins'} />

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
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={'4'} marginTop={'4'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol} />
            ))}
          </HStack>
          <HStack w='full' overflowX={'auto'} p={'8'} display={'flex'} justifyContent={'center'}>
            {page>1 &&
              <Button onClick={handlePrevClick} disabled={page === 1}>
                Previous
              </Button>
            }
            {/* {
              btns.map((item, index) => (
                <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(index + 1)}>{index + 1}</Button>

              ))
            } */}
            { page>1 && 
            <Button bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(page - 1)}>{page-1}</Button>
            }
            <Button bgColor={'blackAlpha.500'} color={'white'}>{page}</Button>
            <Button bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(page + 1)}>{page + 1}</Button>

            {page < 132 &&
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


export default Coins