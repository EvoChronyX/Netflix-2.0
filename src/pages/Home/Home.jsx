import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'
import { useRef } from 'react';

const Home = () => {
  
  const newWindowRef = useRef(null);

  const playVideo = () => {
    const videoUrl = <iframe src="https://youtu.be/80dqOwAOhbo?si=W4t1mOPefeE1ltRA" frameborder="0" allowFullScreen></iframe>  

    // Open a new window with the YouTube video URL
    newWindowRef.current = window.open(
      videoUrl,
      "YouTubePlayer",
      "width=9000,height=9000"
    );

    // Set the video to fullscreen mode after it loads
    if (newWindowRef.current) {
      newWindowRef.current.onload = () => {
        newWindowRef.current.document.body.requestFullscreen();
      };
    }
  };

  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={Hero_banner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={Hero_title} alt="" id='n-series'/>
            <p>This is your Favourite movie and this one you could not control yourself
              from your emotions the imdb rating was 7.8 out of 10 so this was a great
              science fiction moovie and also a good entertainer...</p>
            <div className="hero-btn">
              <button className='btn' onClick={()=>{playVideo()}}><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards />
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
          <TitleCards title={"Trending on Netflix"} category={"popular"} />
          <TitleCards title={"Entertainment"} category={"upcoming"} />
          <TitleCards title={"Entertainment"} category={"now_playing"} />
        </div>
        <Footer />
      </div>
  )
}

export default Home