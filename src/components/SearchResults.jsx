import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from './fetchFromApi'
import Sidebar from './Sidebar'
import VideoFeed from './VideoFeed'

const SearchResults = ({theme}) => {

  const styles = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white' ;

    const {searchTerm} = useParams()
    const [videos,setVideos] = useState(null)
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}&order=date`)
        .then(({data})=>{
            setVideos(data?.items)
            console.log(data?.items)
            setLoading(false)

        })

    },[searchTerm])
  return (
    loading ? <div className={` w-[100%] h-[100%] ${styles} opacity-5`} /> : 
    <div className={`w-[100%] h-[100%] overflow-y-scroll flex justify-center relative top-[60px] ${styles} `}>
        
         <VideoFeed videos={videos} />
     </div>
    
  )
}

export default SearchResults
