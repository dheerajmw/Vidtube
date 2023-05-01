import React ,{useState, useEffect}from 'react'
import { Link, useParams } from 'react-router-dom';
import { demoProfilePicture, demoThumbnailUrl } from './utils'
import { fetchFromApi } from './fetchFromApi';
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCard = ({video}) => {
    // console.log(video)
    const [videoDetails,setVideoDetails] = useState(null)
    const [loading,setLoading] = useState(true)
    const [ channelDetails, setChannelDetails] = useState(null)

    const videoId = video?.id?.videoId
    const thumbnail = video?.snippet?.thumbnails?.high?.url;
    const channelTitle = video?.snippet?.channelTitle;
    const logo = channelDetails?.snippet?.thumbnails?.high?.url ;
    const views = videoDetails?.statistics?.viewCount
    const channelId = video?.snippet?.channelId ;
    const videoTitle = video?.snippet?.title
    const styles = JSON.parse(localStorage.getItem('theme')) === 'light' ? 'hover:text-black' : 'hover:text-white' ;
    // console.log(videoId)

    useEffect(()=>{
        fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${videoId}`)
        .then((data)=>{
            setVideoDetails(data?.data?.items[0])
            // console.log(data)
            // console.log(videoDetails)

            setLoading(false)   

        })

        fetchFromApi(`channels?part=snippet&id=${channelId}`)
        .then((res)=>{
          setChannelDetails(res?.data?.items[0])
          console.log(res)
          setLoading(false)

        })
        

    },[])



    return (
    loading ? <div className=' w-[100%] h-[100%] bg-black opacity-5' /> : 

    <div className='lg:h-[360px] lg:w-[360px] xs:h-[360px] xs:w-[260px] flex items-center justify-start gap-[10px] flex-col m-[10px]'>

        <div className='h-[200px]  w-[100%]  rounded-xl overflow-hidden'>
            <Link to={`/video/${videoId}`}>
                <img src={thumbnail ? thumbnail : demoThumbnailUrl} className='bg-center h-full w-full object-cover bg-no-repeat '  alt=""/>
            </Link>
        </div>

        <div className='w-[100%] h-auto flex justify-start items-start  gap-[10px]'>
            <Link to={`/channel/${channelId}`}>
             <div className='w-[35px] h-[35px]  rounded-full overflow-hidden bg-gray-200 '>
                <img src={logo ? logo : demoProfilePicture } alt="" className=' h-full w-full object-cover'/>
            </div>
            </Link>



            <div className='w-[calc(100%-45px)] flex flex-col gap-[5px]'>
                <Link to={`/video/${videoId}`}>
                    <div className=' font-medium text-base  w-[calc(100%-50px)] break-normal'>{videoTitle?.slice(0,60)}</div>
                </Link>

                <Link to={`/channel/${channelId}`}  >
                    <div className={`text-sm text-gray-500 font-normal ${styles}`}>{channelTitle}</div>
                </Link>
                <Link to={`/video/${videoId}`}>
                <div className='text-sm text-gray-500 font-normal'>{abbreviateNumber(views)} views</div>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default VideoCard
