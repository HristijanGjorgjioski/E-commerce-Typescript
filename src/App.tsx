import React, { useState } from 'react';
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useQuery } from 'react-query';

import { StyledButton, Wrapper } from './App.styles';
import Item from './Item/Item';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((acc: number, item) => acc + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveToCart = () => null;
  
  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>

  return (
      <Wrapper>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          Cart Goes Here
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCart />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
  )
}

export default App
