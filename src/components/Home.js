import React,{useEffect,useContext} from 'react'
import MovieCards from './MovieCards'
import {context} from '../context'
import {API_URL,IMG_PATH} from '../urlConfig'

const Home = () => {

const contextData=useContext(context)

const {getMovies,movies}=contextData

useEffect(()=>{
  getMovies(API_URL)   
},[])



  return (
    <div className='row'>

    {
        movies?.length===0 && <h2 className='noresult-head'>No Movies Found</h2>
    }    
          
   {
       movies?.map((movie,ind)=>{
           return   <div className='col-12 col-md-4 col-lg-3' key={ind}>
           <MovieCards 
           title={movie.original_title}
           img={IMG_PATH+movie.poster_path}
           description={movie.overview}
           rating={movie.vote_average}
           />
            </div>
       })
   }
    </div>
   
  )
}

export default Home
