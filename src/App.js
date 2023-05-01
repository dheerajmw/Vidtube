import React, { useEffect ,useState} from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import { Navbar, Feed, SearchResults, ChannelDetails, VideoDetails} from './components';



const App = () =>{
  const currentTheme = JSON.parse(localStorage.getItem('theme'))
  console.log(currentTheme)
  const [theme,setTheme] = useState(currentTheme)

  const toggleTheme = ()=>{
      setTheme(theme==='light' ? 'dark' :'light')
  }

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme))
         console.log(theme)

  },[theme])
    
    return(
      <BrowserRouter>
        <div className='width-[100vw] h-[100%] overflow-x-hidden '>
          <Navbar toggleTheme={toggleTheme} theme={theme}/>
          <Routes>
              <Route path="/" exact element={<Feed theme={theme}/>} />
              <Route path="/search/:searchTerm" exact element={<SearchResults theme={theme}/>} />
              <Route path="/video/:videoId" exact element={<VideoDetails theme={theme}/>} />
              <Route path="/channel/:channelId" exact element={<ChannelDetails theme={theme}/>} />

          </Routes>
        </div>
      </BrowserRouter>
    )
  }

export default App
