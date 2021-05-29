import React from 'react'
import Style from './cardnowshowing.module.css'

function CardNowShowing({nowshowingmovies}) {

const dataNowMovie = nowshowingmovies.data
  return (
    <div>
      <div className="row">
      {dataNowMovie !== undefined ? dataNowMovie.map((item)=>{
        return (
          <>
            <div className="col mt-4">
              <div className={Style['nowshowing-box']}>
                <img className={Style['img-nowshowing']} src={item.image} alt=""/>
                <h5 className={Style['title-now-showing-movie']}>{item.tittleMovie}</h5>
                <h6 className={Style['genre-now-showing-movie']}>{item.genreMovie}</h6>
                <button className={Style['btn-now-showing-movie']}>Comming Soon</button>
              </div>
            </div>
            {/* <img src={item.image} alt=""/>
            <h1>{item.tittleMovie}</h1>
          <h2>{item.genreMovie}</h2> */}
          </>
        )
      }) : console.log("try again")} 
      </div>
    </div>
  )
}

export default CardNowShowing
