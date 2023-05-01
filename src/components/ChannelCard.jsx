import { abbreviateNumber } from 'js-abbreviation-number';
import React, { useEffect, useState } from 'react'
import { fetchFromApi } from './fetchFromApi';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from './utils';

const ChannelCard = ({channel}) => {

    const [channelDetails,setChannelDetails] = useState(null);
    const channelId = channel?.snippet?.channelId;
    const channelTitle = channel?.snippet?.channelTitle;
    const subscribers = channelDetails?.statistics?.subscriberCount;
    const logo = channelDetails?.snippet?.thumbnails?.high?.url
    // console.log(channel)


    useEffect(()=>{

        fetchFromApi(`channels?part=snippet&id=${channelId}`)
        .then((res)=>{
          setChannelDetails(res?.data?.items[0])
          console.log(res)

        })
        
    },[])


  return (

    <div className='h-[360px] w-[360px] flex items-center flex-col justify-center gap-[10px]'>
        <Link to={`/channel/${channelId}`}>
        <div className='w-[200px] h-[200px] rounded-full bg-gray-100 overflow-hidden'>
            <img src={logo ? logo : demoProfilePicture } className='h-full w-full object-cover' alt="" />
        </div>
        </Link>
        <Link to={`/channel/${channelId}`}>
            <h3 className='font-medium'>{channelTitle}</h3>
        </Link>
        <Link to={`/channel/${channelId}`}>
            <h4 className='text-gray-500 font-medium text-sm'>{abbreviateNumber(subscribers)} Subscribers</h4>
        </Link>
    </div> 
  )
}

export default ChannelCard
