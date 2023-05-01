import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const SearchBarMobile = ({styles}) => {

    const [searchBar, setSearchBar] = useState(false)
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
            setSearchBar(false)
        }
        
    
    }
    const toggleSearch = ()=>{
        setSearchBar(searchBar === true ? false :true)
        console.log(searchBar)
    }
    useEffect(()=>{
        console.log(searchBar)

        
    },[searchBar]) 

  return (
    <div className='xs:flex md:hidden w-[100%] h-full items-center justify-end'>
        
      <button onClick={toggleSearch} className='' > 
      {searchBar === false ?
        <SearchOutlinedIcon /> :
        <CloseIcon />
      }
      </button>

      {searchBar === true &&
         <div className={`w-[100vw] h-[auto] absolute  top-[60px] left-[0] ${styles}`}>
         <form onSubmit={handleSubmit} className={` flex w-[100%] justify-between items-center h-[50px] border-[2px] border-gray-300 ${styles} `}>
             <input type="text" placeholder='Search...' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className={`w-[90%] h-[100%] focus:outline-none pl-[10px] ${styles}`} />
             <button type='submit' className={` w-[10%] h-[100%]  border-gray-300   hover:bg-gray-300 ${styles}`}>
                {searchBar === true ?
                <SearchOutlinedIcon /> :
                <CloseIcon />}
              </button>
         </form>
       
     </div>
      }
    </div>
  )
}

export default SearchBarMobile
