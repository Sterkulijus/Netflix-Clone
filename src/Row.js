import React, { useEffect } from 'react'
import './Row.css'
function Row({title,fetchURL,isLargeRow = false}) {

console.log(fetchURL);

return (
    <div className='row'>
      <h2 style={{ color: 'white' }}>{title}</h2>
      <div className="row__posters">  
        {fetchURL.map(movie => (
          <div key={movie.name} className="movie__container">
            <img
              className={`row__poster`}
              src={
                title === 'COMEDY'
                  ? 'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/the-hangover-movie-poster.jpg'
                  : title === 'HORROR'
                  ? 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/220ecf62048575.5c98e8721a361.jpg'
                  : 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg'
              }
              alt=""
            />
            <p className="movie__text">{movie.originalTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row

//originalTitle