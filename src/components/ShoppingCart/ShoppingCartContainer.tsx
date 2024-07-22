import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartEmpty from './ShoppingCartEmpty';
import ShoppingCartItems from './ShoppingCartItems';



const ShoppingCartContainer = () => {

   const shoppingCartStore = useSelector((state:any) => state.shoppingCart)
   


   return <div className="w-full h-full flex items-center justify-center">
      {
         shoppingCartStore.items.length ? 
            <ShoppingCartEmpty /> : 
            <ShoppingCartItems
               items = {shoppingCartStore.items}
               totalCount = {shoppingCartStore.totalCount}
            />
      }
   </div>
}

export default ShoppingCartContainer