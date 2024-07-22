import { TCategories } from '@/types/Types'
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
   const categories = useSelector((state: any) => state.products.categories)


   return <ul className="pt-5 sticky top-16">
      <p className="text-lg text-center py-6 sticky top-0">Kategoriler</p>
      {
         categories.map((el: TCategories, idx: number) => {
            return <li key={idx} className='transition-all hover:bg-slate-300 flex items-center gap-3 px-6 py-4 cursor-pointer'>
               <img className="w-20 h-16" src={el.categoryPicture.src} alt="" />
               <p className="">{el.categoryName}</p>
            </li>
         })
      }
   </ul>
}

export default Sidebar