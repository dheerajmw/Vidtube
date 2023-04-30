import React, { useEffect, useState } from 'react'
import { categories } from './utils';

const Sidebar = ({selectedCategory,setSelectedCategory,theme}) => {
  const styles = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white' ;
  const buttonStyles = theme === 'light' ? ' text-black' : 'text-white' ;
useEffect(()=>{

},[theme])

  return (
    <div className={`xs:w-[100vw]  lg:w-[200px] md:w-[200px] xs:h-[auto] xs:my-[10px] md:h-[calc(100vh-60px)] border-r-[1px] border-gray-300 flex xs:flex-col overflow-x-scroll md:flex-col items-start p-[4px] sticky top-[60px]  ${styles}`}>
        <div className='h-[calc(100%-40px)] md:w-[100%] xs:overflow-x-scroll overflow-y-scroll flex  xs:h-50px md:overflow-x-hidden md:flex-col items-center'>
        {categories.map((category,idx)=>(
            <button onClick={()=>setSelectedCategory(category.name)} key={idx}  className={`md:w-[90%] xs:w-[auto] h-[40px] ${category.name===selectedCategory ? "font-semibold" : 'font-normal'} ${buttonStyles} ${category.name===selectedCategory ? "text-white" : "text-black"} hover:bg-red-500 hover:text-white rounded-lg flex text-left ${selectedCategory===category.name && 'bg-red-500'}  items-center justify-start p-[10px] gap-[30px] text-sm  `}>
                <span>{category.icon}</span>
                <span className='xs:hidden md:flex '>{category.name}</span>
            </button> 
        ))}
        </div>
        <div className='text-xs h-[40px] text-slate-500 flex items-center justify-center xs:hidden md:block absolute bottom-[0px] '>© 2023 VidTube LLC</div>
    </div>
  )
}

export default Sidebar
