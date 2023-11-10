import React from 'react';
import "./Banner.css";

function Banner() {

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...': string;
    }

  return <header className="banner" style={{
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
  }}>

<div className="banner__contents">
  <h1 className="banner__title">Movie Name</h1>
  <div className="banner__buttons">
    <button className='banner_button'>Play</button>
    <button className='banner_button'>My List</button>
  </div>
  <h1 className="banner_description">{truncate('This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description'
  , 150)}
  </h1>
</div>

<div className='banner--fadeBottom' />
  </header>;

}

export default Banner;