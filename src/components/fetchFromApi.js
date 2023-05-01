import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;

const options = {
  method: 'GET',

  params: {
    
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '7975c36b62msh47d84890c8ff671p1fd268jsn5ec6bc3f6097',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromApi  = async (url)=>{
    try{
        const data = await axios.get(`${BASE_URL}/${url}`,options)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}