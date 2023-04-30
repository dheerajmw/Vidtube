import React, { useEffect, useState } from 'react'
import { fetchFromApi } from './fetchFromApi'
import Sidebar from './Sidebar'
import VideoFeed from './VideoFeed'

const Feed = ({theme}) => {

    const styles = JSON.parse(localStorage.getItem('theme')) === 'light' ? 'bg-white text-black' : 'bg-black text-white' ;

    
    const [videos,setVideos] = useState(null)
    const [loading,setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('New')
useEffect(()=>{

},[theme])

    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then(({data})=>{
            setVideos(data?.items)
            console.log(data?.items)
            // console.log(videos)

            setLoading(false)   

        })
        

    },[selectedCategory])

    
  return (
    loading ? <div className=' w-[100%] h-[100%] bg-black opacity-5' /> : 
        <div className={`w-100% flex xs:flex-col md:flex-row  relative top-[60px] ${styles} `}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} theme={theme}/>
            <VideoFeed videos = {videos} theme={theme}/>
            
        </div>
  )
}

export default Feed
