import React, { useState } from 'react';
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useQuery } from 'react-query';

import { Wrapper } from './StyledComponents/App.styles';
import Item from './Item/Item';

export type CartItemType = {
  id: number;
  category: string;
  decsription: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveToCart = () => null;
  
  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>

  return (
    <div>
      <Wrapper>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  )
}

export default App
