"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/redux/features/productsSlice'
import { AppDispatch } from '@/redux/store'
import Category from '@/components/Category/Category'
import { TCategories } from '@/types/Types'


const CategoryContainer: React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();
   const categories = useSelector((state: any) => state.products.categories)

   useEffect(() => {
      dispatch(fetchProducts())
   }, [])



   return <div>
      <div className="category-container bg-neutral-100 font-medium gap-10 flex justify-between p-14">
         {
            categories.map((el: TCategories, idx: number) => {
               return <Category
                  key={idx}
                  eachCategory={el}
               />
            })
         }
      </div>


   </div>
}

export default CategoryContainer