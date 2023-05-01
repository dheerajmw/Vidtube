import React, { useState } from 'react'
import { categories } from './utils';

const Sidebar = ({selectedCategory,setSelectedCategory,theme}) => {
  const styles = theme === 'light' ? 'text-black' : 'text-white' ;
  const buttonStyles = JSON.parse(localStorage.getItem('theme')) === 'light' ? 'text-black' : 'text-white'


  return (
    <div className={`xs:w-[auto] lg:w-[200px]  h-[calc(100vh-60px)] border-r-[1px] border-gray-300 flex  flex-col items-center p-[4px] justify-between sticky top-[60px] ${styles}`}>
        <div className='h-[calc(100%-40px)] w-[100%] overflow-y-scroll overflow-x-hidden flex  xs:h-50px flex-col items-center'>
        {categories.map((category,idx)=>(
            <button onClick={()=>setSelectedCategory(category.name)} key={idx}  className={`lg:w-[90%]  xs:w-[auto] h-[40px] ${category.name===selectedCategory ? "font-semibold" : 'font-normal'} ${styles} ${category.name===selectedCategory ? "text-white" : "text-black"} hover:bg-red-500 hover:text-white rounded-lg flex text-left ${selectedCategory===category.name && 'bg-red-500'}  items-center justify-start p-[10px] gap-[30px] text-sm  `}>
                <span>{category.icon}</span>
                <span className='xs:hidden lg:flex '>{category.name}</span>
            </button>
        ))}
        </div>
        <div className='text-xs h-[40px] text-slate-500 flex items-center justify-center '>© 2023 VidTube LLC</div>
    </div>
  )
}

export default Sidebar
