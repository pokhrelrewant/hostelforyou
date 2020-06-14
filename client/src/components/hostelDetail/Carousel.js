import React, { Fragment } from "react";

const Carousel = ({imgFolder, images}) => {
  let divs = [];
  let indicators = [];
  if (images===null || images===undefined) return (<div></div>);
  for (let i = 1; i < images.length; i++) {
    divs.push(
      <div className='carousel-item' key={i}>
        <img
          className='d-block w-100'
          src={process.env.PUBLIC_URL + `/uploads/${imgFolder}/${images[i]}`}
          style={{ height: "500px" }}
          alt=''
        />
      </div>
    );
    indicators.push(
      <li data-target='#carouselExampleIndicators' data-slide-to={i} key={i} />
    );
  }

  return (
    <Fragment>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to={0}
            className='active'
          />

          {indicators}
        </ol>
        <div
          className='carousel-inner'
          style={{ width: "100%", height: "500px" }}
        >
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              height='500px'
              src={
                process.env.PUBLIC_URL + `/uploads/${imgFolder}/${images[0]}`
              }
              alt='First slide'
            />
          </div>
          {divs}
          {/* <div className='carousel-item'>
            <img
              className='d-block w-100'
              src={
                process.env.PUBLIC_URL + `/uploads/${imgFolder}/${images[1]}`
              }
              alt='Second slide'
            />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src='...' alt='Third slide' />
          </div> */}
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Carousel;
