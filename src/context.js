import React,{createContext,useReducer} from 'react'
import axios from 'axios'

import reducer from './reducer'


const context=createContext()


const DataProvider = ({children}) => {

const initialState={
    loading:false,
    error:false,
    movies:[]
}


const [state,dispatch]=useReducer(reducer,initialState)

const {movies,loading,error}=state

const getMovies=async(url)=>{
    dispatch({type:'LOADING'})
     
    try {
        const {data:{results}}=await axios.get(url) 
        dispatch({
            type:'LOAD_DATA',
            payload:results
        })
    } catch (error) {
        dispatch({type:'ERROR'})
    }
   
}

const getMoviesBySearch=async(url)=>{
    dispatch({type:'LOADING'})
     
    try {
        const {data:{results}}=await axios.get(url)
        dispatch({
            type:'LOAD_DATA',
            payload:results
        })
    } catch (error) {
        dispatch({type:'ERROR'})
    }

   
}

  return (
    <context.Provider value={{
        loading,
        error,
        movies,
        dispatch,
        getMovies,
        getMoviesBySearch
    }}>

        {children}
      
    </context.Provider>
  )
}

export  {context,DataProvider}
