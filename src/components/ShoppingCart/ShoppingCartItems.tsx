import { TData, TDataWithCount } from '@/types/Types'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type props = {
   items: Array<TData>,
   totalCount: number
}

const ShoppingCartItems = ({ items,totalCount } : props) => {
   const [filteredAr, setFilteredAr] = useState<TDataWithCount[]>([]);
   const [total, setTotal] = useState<number>(0)
   const router = useRouter();

   useEffect(()=>{
      hasDuplicate()
   },[items])
   useEffect(()=>{
      updateSum()
   },[filteredAr])

   function hasDuplicate() {
      const tempAr: TDataWithCount[] = []
      const ids = new Set<number>();
      for (const obj of items) {
         if (ids.has(obj.id)) {
            let alreadyItem = tempAr.find(item => item.id === obj.id)
            if (alreadyItem) alreadyItem.count += 1
         } else {
            ids.add(obj.id);
            tempAr.push({
               ...obj,
               count: 1
            })
         }
      }
      setFilteredAr(tempAr)
   }
   function updateSum () {
      let sum:number = 0;
      for(let i=0; i<filteredAr.length;i++){
         sum+=filteredAr[i].price * filteredAr[i].count
      }
      setTotal(sum)
   }
   function incAmount(param: TDataWithCount) {
      let newAr:TDataWithCount[] = JSON.parse(JSON.stringify(filteredAr));
      let item = newAr.find(item => item.id === param.id);
      if(item) item.count += 1;
      setFilteredAr(newAr);
      // router.push("/Su")
   }
   function deAmount(param: TDataWithCount) {
      let newAr: TDataWithCount[] = JSON.parse(JSON.stringify(filteredAr));
      let item = newAr.find(item => item.id === param.id);
      if (item && item.count > 1) item.count -= 1;
      else newAr = newAr.filter(el => el !== item);
      setFilteredAr(newAr);
   }

  return <div className="flex flex-col justify-center h-full w-3/4">
   <div className='mt-auto'>
      {
         filteredAr.map((el: TDataWithCount, idx:number)=>{
            return <div className="flex items-center justify-between gap-3" key={idx}>
               <p className='text-lg'>{`${el.productName[0].toLocaleUpperCase()}${el.productName.slice(1)}`}</p>
               <div className='flex items-center gap-1'>
                  <p className='text-lg text-center'>{el.count} x&nbsp;</p>
                  <p onClick={() => incAmount(el)} className='border border-zinc-400 rounded p-1 hover:bg-slate-100 transition-all cursor-pointer'><svg className='w-3 fill-green-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg></p>
                  <p onClick={() => deAmount(el)} className='border border-zinc-400 rounded p-1 hover:bg-slate-100 transition-all cursor-pointer'><svg className="w-3 fill-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></p>
                  <p className='pl-2 cursor-pointer hover:scale-125 transition-all'><svg className="w-5 h-6 fill-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></p>
               </div>
            </div>
         })
      }
   </div>
   <hr className="mt-1 border-zinc-400 w-full mx-auto"/>
   <div className="mt-auto flex flex-col gap-1">
      <p className="font-bold text-lg text-center">Toplam:&nbsp;{total}</p>
      <p className="w-full bg-green-700 rounded-full text-center text-white font-bold py-1 cursor-pointer transition-all hover:bg-green-600">Satın Al</p>
      <p className="w-full bg-orange-700 rounded-full mb-2 text-center text-white font-bold py-1 cursor-pointer transition-all hover:bg-orange-600">Sepete Git</p>
   </div>
  </div>
}

export default ShoppingCartItems