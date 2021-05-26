import React, {useState, useRef} from 'react'
import Style from './admin.module.css'
import {useDispatch} from 'react-redux'
import {postMovies} from '../../configs/actions/movies'
import swal from 'sweetalert'
import {Link, useHistory} from 'react-router-dom'
import DatePicker from "react-datepicker";
import {cgv, cinema21, xxi} from '../../assets/images'

import "react-datepicker/dist/react-datepicker.css";

function AdminJumbotron() {
  const history= useHistory()
  const [startDate, setStartDate] = useState(new Date());
  const [selectCinema, setSelectCinema] = useState(null)
  const [selectDate, setSelectDate] = useState('')

  const cinemaName = selectCinema

  const dispatch = useDispatch()
  const imageRef = useRef(null)
  const [formMovie, setFormMovie] = useState({
    movieTittle: '',
    genre: '',
    directedBy: '',
    duration: '',
    image: null,
    casts: '',
    synopsis: '',
    time: selectDate,
    idCinema: cinemaName
  })
  console.log(formMovie.idCinema, formMovie.time, 'ceeeekkkkkkkk', selectCinema, selectDate, cinemaName);
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
    formData.append('time', formMovie.time)
    formData.append('idCinema', formMovie.idCinema)
    imageRef.current.value = ""

    if(selectCinema==null){
      swal(`You Haven't Selected Any Cinema!`)
    } else if(selectDate==''){
      swal(`You Haven't Selected Any Date!`)
    } else{
      dispatch(postMovies(formData)) 
      .then((res)=>{
        setFormMovie({
          movieTittle: '',
          genre: '',
          directedBy: '',
          duration: '',
          image: null,
          casts: '',
          synopsis: '',
          time: selectDate,
          idCinema: selectCinema
        })
        swal('Success Insert Movie')
        history.push('/')
      })
      .catch((err)=>{
        console.log(err);
      })
    }
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
                        <div className={Style["movie-poster"]}></div>
                        {/* <img className={Style['movie-poster']} src="http://bppl.kkp.go.id/uploads/publikasi/karya_tulis_ilmiah/default.jpg" alt=""/> */}
                      </div>
                      
                      <div className="col">
                      <form>
                      <div className="form-row mt-5">
                        <div className="col">
                          <h5 className={Style['text-form']} >Movie Name</h5>
                          <input type="text" 
                          name="movieTittle"
                          className={Style['form-control']} 
                          placeholder="Insert Movie Tittle"  
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
                          placeholder="Insert Genre Here"
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
                            placeholder='Insert Synopsis Here'
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
                  <h3 className={Style['tittle-movie-desc']} >Select Cinema</h3>
                  <div className={Style['card-profile']}>
                    {/* <div className="dropdown">
                      <button className={[['btn'], ['btn-light'], ['dropdown-toggle'], Style['btn-city']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select City
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Bengkulu</Link>
                        <Link className="dropdown-item" to="#">Palembang</Link>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                      </div>
                    </div> */}
                    {selectCinema==null?
                      <> 
                        <input className={Style['input-cinema']} type="number" value="" placeholder="No Cinema Selected" disabled/>
                      </>
                    : null}
                    {selectCinema==2?
                      <> 
                        <input className={Style['input-cinema']} type="number" value="" placeholder="Cinema CGV" disabled/>
                      </>
                    : null}
                    {selectCinema==1?
                      <> 
                        <input className={Style['input-cinema']} type="number" value="" placeholder="Cinema 21" disabled/>
                      </>
                    : null}
                    {selectCinema==4?
                      <> 
                        <input className={Style['input-cinema']} type="number" value="" placeholder="Cinema XXI" disabled/>
                      </>
                    : null}
                    
                    <button onClick={()=>setSelectCinema(2)} className={Style['cinema-box']} >
                      <img className={Style['img-cinema1']} src={cgv} alt=""/>
                    </button>
                    <button onClick={()=>setSelectCinema(1)} className={Style['cinema-box']}>
                      <img className={Style['img-cinema1']} src={cinema21} alt=""/>
                    </button>
                    <button onClick={()=>setSelectCinema(4)} className={Style['cinema-box']}>
                      <img className={Style['img-cinema1']} src={xxi} alt=""/>
                    </button>
                    
                  </div>
                  {/* AKHIR PREMIERE LOC */}

                  {/* AWAL SHOWTIMES */}
                  <div className={Style['card-profile3']}>
                    <h3 className={Style['title-showtime']} >Select Time</h3>   
                    {selectDate==''?
                      <> 
                        <input className={Style['input-date']} type="number" value="" placeholder="No Time Selected" disabled/>
                      </>
                    : null}
                    {selectDate=='04.10pm'?
                      <> 
                        <input className={Style['input-date']} type="number" value={selectDate} placeholder={selectDate} disabled/>
                      </>
                    : null}
                    {selectDate=='06.30pm'?
                      <> 
                        <input className={Style['input-date']} type="number" value={selectDate} placeholder={selectDate} disabled/>
                      </>
                    : null}
                    {selectDate=='11.30pm'?
                      <> 
                        <input className={Style['input-date']} type="number" value={selectDate} placeholder={selectDate} disabled/>
                      </>
                    : null}
                    {selectDate=='08.20pm'?
                      <> 
                        <input className={Style['input-date']} type="number" value={selectDate} placeholder={selectDate} disabled/>
                      </>
                    : null}
                    {selectDate=='09.50pm'?
                      <> 
                        <input className={Style['input-date']} type="number" value={selectDate} placeholder={selectDate} disabled/>
                      </>
                    : null}
                    <div className="row d-flex justify-content-center">
                      <div className="col-3">
                        <button className={Style['time']} onClick={()=>setSelectDate('04.10pm')}>
                          <p className={Style["time-text"]}>04.10pm</p>
                        </button>
                      </div>
                      <div className="col-3">
                        <button className={Style['time']} onClick={()=>setSelectDate('06.30pm')}>
                          <p className={Style["time-text"]}>06.30pm</p>
                        </button>
                      </div>
                      <div className="col-3">
                        <button className={Style['time']} onClick={()=>setSelectDate('08.20pm')}>
                          <p className={Style["time-text"]}>08.20pm</p>
                        </button>
                      </div>
                    </div>

                    <div className="row d-flex justify-content-center mt-4">
                      <div className="col-3">
                        <button className={Style['time']} onClick={()=>setSelectDate('09.50pm')}>
                          <p className={Style["time-text"]}>09.50pm</p>
                        </button>
                      </div>
                      <div className="col-3">
                        <button className={Style['time']} onClick={()=>setSelectDate('11.30pm')}> 
                          <p className={Style["time-text"]}>11.30pm</p>
                        </button>
                      </div>
                    </div>
                    
                    
                    {/* <div className="dropdown">
                      <button className={[['btn'], ['btn-light'], ['dropdown-toggle'], Style['btn-date']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select a date
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                      </div>
                    </div> */}
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
