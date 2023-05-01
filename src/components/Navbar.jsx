import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import {logo} from "./utils"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchBar from './SearchBar';
import SearchBarMobile from './SearchBarMobile';

const Navbar = ({toggleTheme,theme}) => {

    const styles = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white' ;
 
   console.log(JSON.parse(localStorage.getItem('theme')))
  return (
    <div className={`h-[60px] w-[100vw] ${styles} overflow-visible z-10 border-b-[1px] border-gray-300 px-[20px] py-[10px] flex items-center justify-between  fixed top-0 ` }>

        <div className=" w-[20%] h-[100%] flex items-center ">
            <Link to='/' className='flex'>
                <img src={logo} alt="logo" className='h-[30px] ' />
                <span className='font-gothic text-[1.5rem] font-normal xs:hidden md:block'>VidTube</span>
            </Link>
        </div>

        <div className={`w-[60%] h-[100%] flex   items-center justify-center `}>
            <SearchBar styles={styles} />
            <SearchBarMobile styles={styles}/>

        </div>

        <div className={`w-[20%] h-[100%] flex items-center justify-end ${styles}`}>

            <button onClick={toggleTheme} className={`${styles}`}>
                <DarkModeOutlinedIcon/>
            </button>

        </div>


    </div>
  )
}

export default Navbar ;
