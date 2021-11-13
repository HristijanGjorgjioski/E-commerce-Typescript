import React from 'react'
import { Button } from '@material-ui/core'

import { CartItemType } from '../App'; 
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = () => {
    
    return (
        <div>
            
        </div>
    )
}

export default Item
