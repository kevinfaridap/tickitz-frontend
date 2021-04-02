import React, {useEffect, useState} from 'react'
import Style from './allmovies.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getNowShowingMovies} from '../../configs/actions/nowshowing'
import CardNowShowing from '../Card/CardNowShowing'
// import ReactPaginate from 'react-paginate'


function AllMoviesJumbotron() {
  const dispatch = useDispatch()
  const {nowshowingmovies} = useSelector(state => state.nowshowingmovies)

  // const pageNow = nowshowingmovies.currentPage
  const [page, setPage] = useState(1)


  const getNowShowing = (page)=> {
    dispatch(getNowShowingMovies(page))
  }

  useEffect(()=>{
    getNowShowing(page)
    
  }, [page]);
  const nowMoviesPerPage = nowshowingmovies.MaxperPage
  const totalPage = nowshowingmovies.Items
  const nowPage = nowshowingmovies.currentPage
  const totalMovie = nowshowingmovies.totalMovies

  // console.log(nowshowingmovies);
  const dataNowMovie = nowshowingmovies.data

// const isNoData = dataNowMovie.length !== 0;
  // console.log(dataNowMovie);
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-now-showing-page']].join(' ')}>
        <div className="container">
          <h1 className={Style['tittle-now-showing-page']}>All Now Showing Movies</h1>
          

          <h5>Page: {nowPage} of {totalPage} | Total Page : {totalPage} | Total Movie : {totalMovie} </h5>


          <CardNowShowing 
            nowshowingmovies={nowshowingmovies}
          />
        
          
        {/* {dataNowMovie !== undefined ? dataNowMovie.map((item)=>{
        return (
          <>
            
            <h1>{item.tittleMovie}</h1>
            <h2>{item.genreMovie}</h2>
          </>
          )
        }) : console.log("try again")} */}

        {/* AWAL BUTTON */}
        <div className="row display-flex justify-content-center mt-5">
          {Array.from(Array(totalPage).keys()).map(item=>
            <>
              <div className="col-1 display-flex justify-content-center">
                <button className={Style['btn-page-now-showing']} onClick={()=>setPage(item+1)} >{item+1}</button>  
              </div>
            </>
          )}
        </div>
        {/* Akhir button */}

        </div>
      </div>
    </div>
  )
}

export default AllMoviesJumbotron
