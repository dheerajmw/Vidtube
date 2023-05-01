import React, { useEffect, useState } from 'react'
import ChannelCard from './ChannelCard'
import { fetchFromApi } from './fetchFromApi'
import VideoCard from './VideoCard'

const VideoFeed = ({videos}) => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    videos !== undefined &&
    setLoading(false) 
  },[])


  return (
    loading ? <div className=' w-[100%] h-[100%] bg-black opacity-5' /> : 

    <div className='w-[100%] h-[100%]  flex flex-wrap justify-around items-center xs:p-[5px] md:p-[20px]'>
        {videos.map((item,idx)=>( 
            <>
            
            {item?.id?.videoId && <VideoCard video={item}/>}
            {item?.id?.channelId && <ChannelCard channel={item}/>}
            {item?.id?.PlaylistId && <ChannelCard />}
            </>
        ))}
      
    </div>
  )
}

export default VideoFeed
