"use client"
import { ECategory } from '@/Enums/Enum';
import { fetchProducts } from '@/redux/features/productsSlice';
import { AppDispatch } from '@/redux/store';
import { TData } from '@/types/Types';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addItemReducer } from '@/redux/features/shoppingCart';

type props = {
   queryString: "Atıştırmalık" | "İçecekler" | "Fırın" | "Yemek" | "Dondurmalar";
}

const Products = ({queryString} : props) => {

   let searchedCategory = ECategory[queryString]
   
   const dispatch = useDispatch<AppDispatch>();
   const [searchedElements, setSearchedElements] = useState<TData[]>([])

   useEffect(() => {
      const fetctFilter = async () => {
         let selectedCategoryItems: TData[] = []
         let response = await dispatch(fetchProducts())
         let _result = await response.payload.filter((el: TData) => el.category === searchedCategory)
         setSearchedElements(_result)
      }
      fetctFilter()
   }, [])

   const addItemHandler = (el: TData)=>{
      dispatch(addItemReducer(el))
   }


  return <div className='flex flex-1 flex-col bg-white mx-6 mt-8 rounded-lg border h-[2500px]'>
   <div className="product-header">
      <p className="text-center p-4 text-3xl font-bold font-sans">{queryString.toUpperCase()}LER</p>
      <hr className="w-5/6 mx-auto"/>
   </div>
   <div className="product-body">
      <ul className="flex flex-wrap mt-5 px-6 rounded-lg">
         {
            searchedElements.map((el:TData,idx:number)=>{
               return <li className="flex flex-col w-48 min-h-44 items-center border border-zinc-50" key={idx}>
                  <div className="cursor-pointer flex justify-end w-full">
                     <div onClick={() => addItemHandler(el)} className="w-10 h-10 flex items-center justify-center border border-400 rounded-lg shadow-md">
                        <svg className="h-6 w-6 flex-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                     </div>
                  </div>
                  <Image className="flex-1 py-4" width={140} height={100} src={`${el.picture}`} alt={`${el.productName}`} priority={true} />
                  <p className="text-center text-lg" style={{ color: "rgb(93,62,188)" }}>₺{el.price}</p>
                  <p className="text-center text-lg text-black">{`${el.productName[0].toUpperCase()+el.productName.slice(1)}`}</p>
               </li>
            })
         }
      </ul>
   </div>
  </div>
}

export default Products