"use client"
import "./page.css"
import React from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar/Sidebar';
import Products from '@/components/Products/Products';
import { ECategory } from '@/Enums/Enum';
import ShoppingCartContainer from '@/components/ShoppingCart/ShoppingCartContainer';


const page = () => {
  const router = usePathname();
  let queryString = decodeURIComponent(router.split("/")[1])

  return <div className="flex min-h-screen px-20 bg-gray-200">
  <div className="sidebar w-1/5 bg-white min-w-fit sticky top-24 h-auto rounded-lg">
    <Sidebar />
  </div>
  <Products 
    queryString = {queryString as keyof typeof ECategory}
  />
  <div className="w-1/6 h-96 bg-white mt-6 sticky top-24 rounded-lg min-w-72">
    <ShoppingCartContainer />
  </div>
</div>
}

export default page