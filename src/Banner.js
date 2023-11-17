import React from 'react';
import "./Banner.css";

function Banner() {

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...': string;
    }

  return <header className="banner" style={{
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url("https://cdn.vox-cdn.com/thumbor/N0OJZTkzP1rOcGXqUM2RzYpr82I=/0x822:1500x1684/1400x1050/filters:focal(630x1237:870x1477):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55661101/ST2_Vertical_Main_PRE_US.0.jpg")`,
  }}>

<div className="banner__contents">
  <h1 className="banner__title">Stranger Things</h1>
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