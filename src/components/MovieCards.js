import React from 'react'

const MovieCards = ({title,img,description,rating}) => {
  return (
    <div className='movie-card'>
      <img src={img} alt='' />
      <div className='movie-info'>
          <p>{title.split('(')[0]}</p>
          <span style={{backgroundColor:rating<=5?'red':rating>=8.5?'green':'orange',textAlign:'center'}}>{rating}</span>
      </div>
      <div className='over-view'>
          {description}
      </div>
    </div>
  )
}

export default MovieCards
