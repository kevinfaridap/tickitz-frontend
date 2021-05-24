import React, {useState, useRef} from 'react'
import Style from './admin.module.css'
import {useDispatch} from 'react-redux'
import {postMovies} from '../../configs/actions/movies'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AdminJumbotron() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch()
  const imageRef = useRef(null)
  const [formMovie, setFormMovie] = useState({
    movieTittle: '',
    genre: '',
    directedBy: '',
    duration: '',
    image: null,
    casts: '',
    synopsis: ''
  })

  const handleChange = (e) => {
    setFormMovie({
      ...formMovie,
      [e.target.name] : e.target.value
    })
  }

  const handleChangeImage =(e) => {
    setFormMovie({
      ...formMovie,
      image: e.target.files[0]
    })
    // console.log(e.target.files[0]);
  }

  const handleButton = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('movieTittle', formMovie.movieTittle)
    formData.append('genre', formMovie.genre)
    formData.append('directedBy', formMovie.directedBy)
    formData.append('duration', formMovie.duration)
    formData.append('image', formMovie.image)
    formData.append('casts', formMovie.casts)
    formData.append('synopsis', formMovie.synopsis)
    imageRef.current.value = ""

    dispatch(postMovies(formData)) 
    .then((res)=>{
      setFormMovie({
        movieTittle: '',
        genre: '',
        directedBy: '',
        duration: '',
        image: null,
        casts: '',
        synopsis: ''
      })
      swal('Success Insert Movie')
    })
    .catch((err)=>{
      // swal('Failed Post Movie, Need Token or Something Else!')
      console.log(err);
    })
    // console.log(formMovie);
  }

    return (
      <div>
        <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">
            {/* {accountList.map((item)=>{
            return ( */}
              <div>
              <div className="row">

              <div className="col-lg">
                  <h3 className={Style['tittle-movie-desc']} >Movie Description</h3>
                  <div className={Style['card-profile2'] }>

                    <div className="row">
                      <div className="col">
                        <div className={Style['poster-border']}></div>
                        <img className={Style['movie-poster']} src="http://3.bp.blogspot.com/-LtV0B4lXT5w/WIib0ogS2bI/AAAAAAAACIc/s89hMiqnHm4Ynxx4N3QLy17mZ8lB33UVACK4B/s1600/Snowden%2Bposter%2B2.jpg" alt=""/>
                      </div>
                      
                      <div className="col">
                      <form>
                      <div className="form-row mt-5">
                        <div className="col">
                          <h5 className={Style['text-form']} >Movie Name</h5>
                          <input type="text" 
                          name="movieTittle"
                          className={Style['form-control']} 
                          placeholder="kosong"  
                          id="movieTittle"
                          value={formMovie.movieTittle}
                          onChange={e => handleChange(e)}
                          />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-form']}>Genre     </h5>
                          <input type="text" 
                          name="genre"
                          className={Style['form-control']} 
                          placeholder="text here"
                          id="genre"
                          value={formMovie.genre}
                          onChange={e => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-row mt-3 mb-3">
                          <div className="col">
                            <h5 className={Style['text-date']}>Release Date</h5>
                            <input type="text" className={Style['form-control-sm']} 
                            name="releaseDate"
                            placeholder="Date"
                            id="releaseDate"
                            value={formMovie.releaseDate}
                            onChange={e => handleChange(e)}
                            />
                          </div>
                          <div className="col">
                            <h5 className={Style['text-duration']}>Duration (Hour/ Min)</h5>
                            <input type="text" class={Style['form-control-sm2']} 
                            name="duration"
                            placeholder="Hours"
                            id="duration"
                            value={formMovie.duration}
                            onChange={e => handleChange(e)}
                            />
                            <input type="text" class={Style['form-control-sm3']} 
                            placeholder="Min "
                            />
                            </div>
                        </div>
                      </div>
                    </form>
                      </div>
                    </div>
                    
                    <div className="col">
                      {/* <h5 className={Style['text-image']} >Synopsis</h5> */}
                      <input type="file" className={Style['form-img']} 
                        name="image"
                        id="image"
                        ref={imageRef}
                        onChange={e => handleChangeImage(e)}
                      />
                    </div>

                    <div className="row">
                      {/* <form> */}
                        <div className="col">
                            <h5 className={Style['text-director']} >Director</h5>
                            <input type="text" className={Style['form-detail']} 
                            name="directedBy"
                            placeholder='Director Name' 
                            id="directedBy"
                            value={formMovie.directedBy}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="col">
                            <h5 className={Style['text-casts']}>Casts</h5>
                            <input type="text" className={Style['form-detail2']} 
                            name="casts"
                            placeholder='Casters'
                            id="casts"
                            value={formMovie.casts}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                      {/* </form>   */}
                    </div>

                    <div className="row">
                      {/* <form> */}
                        <div className="col">
                            <h5 className={Style['text-synopsis']} >Synopsis</h5>
                            <input type="text" className={Style['form-synopsis']} 
                            name="synopsis"
                            placeholder='Text synopsis here'
                            id="synopsis" 
                            value={formMovie.synopsis}
                            onChange={e => handleChange(e)}
                            />
                        </div>
                      {/* </form>   */}
                    </div>


                     
                      <button type="button" className={Style['btn-update']} onClick={handleButton} > 
                        Update Changes 
                      </button>
                       
                  </div>
                </div>



                {/* AWAL PREMIERE LOCATION */}
                <div className="col-lg">
                  <h3 className={Style['tittle-movie-desc']} >Premiere Location</h3>
                  <div className={Style['card-profile']}>
                    <div className="dropdown">
                      <button className={[['btn'], ['btn-light'], ['dropdown-toggle'], Style['btn-city']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select City
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Bengkulu</Link>
                        <Link className="dropdown-item" to="#">Palembang</Link>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                      </div>
                    </div>

                    <div className={Style['cinema-box']}>
                      <img className={Style['img-cinema1']} src="http://localhost:8000/image/1616933213454-cinema21.png" alt=""/>
                    </div>
                    {/* <div className={Style['cinema-box']}>
                      <img className={Style['img-cinema1']} src="http://localhost:8000/image/1616933213454-cinema21.png" alt=""/>
                    </div>
                    <div className={Style['cinema-box']}>
                      <img className={Style['img-cinema1']} src="http://localhost:8000/image/1616933213454-cinema21.png" alt=""/>
                    </div> */}
                  </div>
                  {/* AKHIR PREMIERE LOC */}

                  {/* AWAL SHOWTIMES */}
                  <div className={Style['card-profile3']}>
                    <h3 className={Style['title-showtime']} >Showtimes</h3>   
                    
                    
                    <div className="dropdown">
                      <button className={[['btn'], ['btn-light'], ['dropdown-toggle'], Style['btn-date']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select a date
                      </button>
                      
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        {/* <Link className="dropdown-item" href="#">Palembang</Link>
                        <Link className="dropdown-item" href="#">Something else here</Link> */}
                      </div>
                    </div>
                  </div>
                  {/* AKHIR SHOWTIMES */}
                </div>

              </div>
              
              <div className="row">
              </div>
          
                </div>
                {/* )
              })} */}
            </div>
          </div>
      </div>
    )
}

export default AdminJumbotron
