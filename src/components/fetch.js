import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'


const options = {
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b66635e6c9msh55a7c0d3520c074p15708djsn97b44cda6d1b',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetch  = async (url)=>{
    try{
        const data = await axios.get(`${BASE_URL}/${url}`,options)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}