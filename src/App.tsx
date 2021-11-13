import React, { useState } from 'react'
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { useQuery } from 'react-query'

import { Wrapper } from './StyledComponents/App.styles'

export type CartItemType = {
  id: number;
  category: string;
  decsription: string;
  image: string;
  price: number;
  title: string;
}

const getProducts = async () => {
  await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  
  
  return (
    <div>
      App
    </div>
  )
}

export default App
