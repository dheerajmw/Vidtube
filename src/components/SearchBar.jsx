import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({styles}) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
        
    
    }

  return (
    <div className={`w-[80%] h-[100%] xs:hidden md:block rounded-full ${styles}`}>
        <form onSubmit={handleSubmit} className={`flex items-center rounded-full h-[100%] border-[2px] border-gray-300 ${styles} `}>
            <input type="text" placeholder='Search...' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className={`w-[90%] h-[100%] rounded-l-full focus:outline-none pl-[10px] ${styles}`} />
            <button className={` w-[10%] h-[100%] border-l-[1px] border-gray-300 rounded-r-full  hover:bg-gray-300 ${styles}`}><SearchOutlinedIcon /></button>
        </form>
      
    </div>
  )
}

export default SearchBar
