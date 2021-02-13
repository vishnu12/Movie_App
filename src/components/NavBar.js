import React,{useState,useContext} from 'react'
import {context} from '../context'
import {API_URL,SEARCH_URL} from '../urlConfig'


const NavBar = () => {

  const [value, setvalue] = useState('')
  
  const contextData=useContext(context)

  const {getMovies,getMoviesBySearch}=contextData


  const handleSubmit=e=>{
    e.preventDefault()
    if(value !==''){
      getMoviesBySearch(SEARCH_URL+value)
    }else{
      getMovies(API_URL)
    }
  }
 

  return (
    <nav className='header-nav'>
       <div className='header-contents'>
           <div className='header-left'>
               <h3>Movies App</h3>
           </div>
           <div className='header-right'>
           <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" onChange={e=>setvalue(e.target.value)}/>
        <button className="btn btn-outline-light search-btn" type="submit">Search</button>
      </form>
           </div>
       </div>
      
    </nav>
  )
}

export default NavBar
