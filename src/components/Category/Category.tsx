import React from 'react'
import { TCategories } from '@/types/Types'
import { useRouter } from 'next/navigation'


type categoryProps = {
  eachCategory: TCategories
}


const Category = ({ eachCategory }  : categoryProps) => {

  const router = useRouter();

  const handleProductDetail = () => {
    router.push(`/${eachCategory.categoryName}`)
  }

  return <div onClick={handleProductDetail} className='each-category flex flex-col items-center gap-2 cursor-pointer'>
    <p>{eachCategory.categoryName}</p>
    <img className="w-36 h-20 rounded" src={eachCategory.categoryPicture.src} alt="" />
  </div>
}

export default Category