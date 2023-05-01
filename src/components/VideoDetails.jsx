import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchFromApi } from './fetchFromApi'
import ReactPlayer from 'react-player'
import VideoFeed from './VideoFeed'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChannelDetails from './ChannelDetails'
import { abbreviateNumber } from 'js-abbreviation-number'

const VideoDetails = ({theme}) => {

  const styles = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white' ;

    const id = useParams()
    const videoId = id.videoId
    const [loading,setLoading] = useState(true)
    

    const [desc,setDesc] = useState(false)
    const toggleDesc = ()=>{
      setDesc(!desc)
      console.log(desc)
    }

    const [videos,setVideos] = useState(null)
    const [videoDetails,setVideoDetails] = useState(null)
  const channelId = ""

    useEffect(()=>{
        fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${videoId}`)
        .then(({data})=>{
            setVideoDetails(data?.items[0])
            console.log(data?.items[0])
            // console.log(data)            
        })

        fetchFromApi(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
        .then((data)=>{
            setVideos(data?.data?.items)
            // console.log(data?.data?.items)
            setLoading(false)
        })

    },[id])

  return (
    loading ? <div className=' w-[100%] h-[100%] bg-black opacity-5' /> : 

    <div className={`w-[100vw] h-[100vh] overflow-scroll  xl:flex  ${styles} p-[20px]`}>
      <div className='w-[100%]  h-[auto] relative top-[60px] overflow-y-scroll '>
        <div className='md:min-h-[640px] xs:h-[260px] w-[100%] mb-[10px]'>
           <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} height='100%' width='auto'  className="react-player " controls />
        </div>
        <div className='h-[auto] '>
          <h3 className='font-medium text-lg  break-normal'>{videoDetails?.snippet?.title}</h3>
          <div className='flex justify-between items-center mb-[10px]'> 
            <Link to={`/channel/${channelId}`}>
              <h2>{videoDetails?.snippet?.channelTitle}</h2>
            </Link>
            <h2><ThumbUpOutlinedIcon /> {videoDetails?.statistics?.likeCount} likes</h2>
          </div>
          <div>

            <button onClick = {()=>toggleDesc()} className='h-[auto] p-[10px] rounded text-left w-full bg-gray-100 text-black'>
              {desc === false ? <>
              <span className='mb-[10px] mr-[40px] font-semibold'>{abbreviateNumber(videoDetails?.statistics?.viewCount)} views</span>
              <span className='mb-[10px] font-semibold'>{videoDetails?.snippet?.publishedAt.slice(0,10)}</span>
              <h2 className='mb-10px font-semibold'>{videoDetails?.snippet?.description.slice(0,60)}...</h2></>
              :
              <>
              <span className='mb-[10px] mr-[40px] xs:font-normal lg:font-semibold'>{abbreviateNumber(videoDetails?.statistics?.viewCount)} views</span>
              <span className='mb-[10px] xs:font-normal lg:font-semibold'>{videoDetails?.snippet?.publishedAt.slice(0,10)}</span>
              <h2 className='mb-[10px] font-semibold'>{videoDetails?.snippet?.description}...</h2>
              </> 
              }
              
            </button>
          </div>
        </div>
      </div>

      <div className=' sm:w-[100%] xl:w-[600px] relative top-[60px] xs:items-center xl:items-start  justify-center h-[auto] overflow-y-scroll '>
        <VideoFeed videos={videos} />
      </div>
    </div>
  )
}

export default VideoDetails
