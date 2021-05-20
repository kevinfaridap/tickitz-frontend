import React, {useEffect, useState} from 'react'
import Style from './allmovies.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getNowShowingMovies} from '../../configs/actions/nowshowing'
import CardNowShowing from '../Card/CardNowShowing'
// import ReactPaginate from 'react-paginate'


function AllMoviesJumbotron() {
  const dispatch = useDispatch()
  const {nowshowingmovies} = useSelector(state => state.nowshowingmovies)

  const [page, setPage] = useState();
  const [by, setBy] = useState();
  const [order, setOrder] = useState( );
  const [title, setTitle] = useState({
    name: ''
  });
  

  useEffect(()=>{
    dispatch(getNowShowingMovies(page, by, order, title.name))
  }, [page, by, order, title.name]);

  const nowMoviesPerPage = nowshowingmovies.MaxperPage
  const totalPage = nowshowingmovies.Items
  const nowPage = nowshowingmovies.currentPage
  const totalMovie = nowshowingmovies.totalMovies

  const dataNowMovie = nowshowingmovies.data


  const handleFormSearch = (e) =>{
    setTitle({
      ...title,
      [e.target.name]: e.target.value
    })
  }

  // const isNoData = dataNowMovie.length !== 0;
  // console.log(dataNowMovie);
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-now-showing-page']].join(' ')}>
        <div className="container">
          <h1 className={Style['tittle-now-showing-page']}>All Upcoming Movies</h1>
          <form className="form d-flex justify-content-center mb-3">
            <input 
              className={[["form-control"], ["mr-sm-2"], Style["form-search"]].join(' ')} 
              type="search" 
              placeholder="Search receiver here" 
              name="name"
              id="name"
              value={title.name}
              onChange={(e)=>handleFormSearch(e)}
            />
          </form>

          <h5>Page: {nowPage} of {totalPage} | Total Page : {totalPage} | Total Movie : {totalMovie} </h5>


          <CardNowShowing 
            nowshowingmovies={nowshowingmovies}
          />
        
        {/* <button className={Style['btn-page-now-showing']} onClick={()=>setOrder('DESC')} >DESC</button>
        <a onClick={()=>setOrder('DESC')} href="">DESCC</a> */}

        {/* {dataNowMovie !== undefined ? dataNowMovie.map((item)=>{
        return (
          <>
            
            <h1>{item.tittleMovie}</h1>
            <h2>{item.genreMovie}</h2>
          </>
          )
        }) : console.log("try again")} */}

          <button className={Style['btn-asc']} onClick={()=>setOrder("ASC")} >
            <img className={Style['up']} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/sort-up-512.png" alt="" />
          </button>
          <button className={Style['btn-asc']} onClick={()=>setOrder("DESC")} >
            <img className={Style['down']} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/sort-up-512.png" alt="" />
          </button>

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
