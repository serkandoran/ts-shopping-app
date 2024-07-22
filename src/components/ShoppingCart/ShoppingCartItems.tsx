import { TData } from '@/types/Types'
import React from 'react'

type props = {
   items: Array<TData>,
   totalCount: number
}

const ShoppingCartItems = ({ items,totalCount } : props) => {

   console.log(items," burası shpng cart items");
   

  return <div>
   {totalCount}
  </div>
}

export default ShoppingCartItems