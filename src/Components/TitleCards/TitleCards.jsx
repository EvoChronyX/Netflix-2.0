import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title, category}) => {

  const [apiData, setapidata] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZThmNzM0MTMxNzMxYzI0OWI4YjczMWI0MzY2ZjBiYyIsInN1YiI6IjY2NDcwYTg0NDI4ZWEwNzE4NDQxMzkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvNrie3mMvMq9HPTWWZzZuGjTZI_cbA4pnoiNrrpNYU'
    }
  };
  

const handleWheel = (event)=>{
   event.preventDefault();
   cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <div className='titlecards'>
       <h2>{title?title:"Popular on Netflix"}</h2>
       <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to = {`/player/${card.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
       </div>
    </div>
  )
}

export default TitleCards