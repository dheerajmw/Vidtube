import { abbreviateNumber } from 'js-abbreviation-number';
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromApi } from './fetchFromApi';
import VideoCard from './VideoCard';
import VideoFeed from './VideoFeed';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { demoProfilePicture } from './utils';

const ChannelDetails = ({theme}) => {


  const styles = theme === 'light' ? 'bg-white text-black ' : 'bg-black text-white' ;

  const {channelId} = useParams()
  const [videos,setVideos] = useState(null)
 const [ channelDetails, setChannelDetails] = useState(null)
 const [loading,setLoading] = useState(true)
  

  const banner = channelDetails?.brandingSettings?.image?.bannerExternalUrl ;
  const logo = channelDetails?.snippet?.thumbnails?.high?.url ;
  const title = channelDetails?.snippet?.title ;
  const subscribers = channelDetails?.statistics?.subscriberCount ;
  const videoCount = channelDetails?.statistics?.videoCount
  const description = channelDetails?.snippet.description ;
useEffect(()=>{

},[theme])



    useEffect(()=>{

        fetchFromApi(`channels?part=snippet&id=${channelId}`)
        .then((res)=>{
          setChannelDetails(res?.data?.items[0])
          console.log(res?.data?.items[0])
          setLoading(false)

        })

        fetchFromApi(`search?channelId=${channelId}&part=snippet&order=date`)
        .then(({data})=>{
            setVideos(data?.items)
            console.log(data?.items)
            // console.log(videos)
        })

    },[channelId])

  return (
    loading ? <div className=' w-[100%] h-[100%] bg-black opacity-5' /> : 

    <div className={`w-[100vw] h-[100%] absolute top-[60px] ${styles} overflow-y-scroll`}>

      <div className=' w-[100vw] xs:h-[130px] md:h-[210px] overflow-hidden '>
        <img src={banner} className=" object-cover h-full w-full" alt=" " />
      </div>
      <div className={`lg:h-[180px] ${styles} xs:h-[150px] w-[100%] p-[10px] mb-[30px]`}>
        <div className='w-full h-full p-20px sm:flex items-center justify-center gap-[20px]'>
        <div className='rounded-full lg:w-[120px] lg:h-[120px] xs:w-[60px] xs:h-[60px] overflow-hidden'>
          <img src={logo ? logo : demoProfilePicture } className=" object-cover h-full w-full" alt="" />
        </div>

        <div className=' w-[80%] flex flex-col items-start justify-around min-h-[100px] mb-[20px]'>
          <div className='font-medium lg:text-2xl xs:text-lg'>{title}</div>
          <div className='flex gap-[10px] justify-start items-center'>
            <span className='font-normal xs:text-sm lg:text-base text-gray-500 '>{abbreviateNumber(subscribers)} subscribers</span>
            <span className='font-normal xs:text-sm lg:text-base text-gray-500'>{abbreviateNumber(videoCount)} videos</span>
          </div>
          <div className='font-normal xs:text-sm lg:text-base'>{description?.slice(0,40)} <NavigateNextIcon /></div>
        </div>
        </div>
      </div>

      <div className={`w-full h-[100%]flex justify-center`}>
        <VideoFeed videos={videos} theme = {theme} />
      </div>

    </div>
  )
}

export default ChannelDetails
