import React, { Component } from 'react'
import Style from './footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div>
                 {/* <!-- AWAL JUMBOTRON4 --> */}
                    <div className={[Style['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-4']].join(' ')}>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4 col">
                            <div className={Style['logo-last']}></div>
                            <p className={Style['last-paragraph']}>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
                        </div>
                        
                        <div className={[['row'], Style['desktop1']].join(' ')}>
                            <div className="col-lg-2">
                            <div className={Style['explore-desktop']}>
                                <h5>Explore</h5>
                                <p>Cinema</p>
                                <p>Movie List</p>
                                <p>My Ticket</p>
                                <p>Notification</p>
                            </div>
                            </div>
                        </div>
                
                
                            <div className={[['row'], Style['explore-mobile']].join(' ')}>
                                <div className="row">
                                <div className="col">
                                    <h5>Explore</h5>
                
                                </div>
                                </div>
                
                                <div className="row jusitfy-content-left">  
                                <div className="col">
                                    <p>Cinema</p>
                                </div>
                                <div className="col">
                                    <p>Movie List</p>
                                </div>
                                <div className="col">
                                    <p>My Ticket</p>
                                </div>
                                <div className="col">
                                    <p>Notification</p>
                                </div>
                                </div>  
                            </div>
                        
                        
                
                        <div className={[['col-lg-2'], Style['sponsor']].join(' ')}>
                            <h5>Our Sponsor</h5>
                            <div className={Style['img-mov-1']}></div>
                            <div className={Style['img-mov-2']}></div>
                            <div className={Style['img-mov-3']}></div>
                        </div>
                
                        <div className={[['col-lg-4'], Style['followus-list']].join(' ')}>
                            <h5>Follow Us</h5>
                            <div className="row">
                            <div className={Style['img-fb']}></div>
                            <h4> Tickitz Cinema id</h4>
                            </div>
                            <div className="row">
                            <div className={Style['img-ig']}></div>
                            <h4>tickitz.id</h4>
                            </div>
                            <div className="row">
                            <div className={Style['img-twitter']}></div>
                            <h4>tickitz.id</h4>
                            </div>
                            <div className="row">
                            <div className={Style['img-youtube']}></div>
                            <h4>Tickitz Cinema Id</h4>
                            </div>
                
                            {/* <!-- Mobile Version only --> */}
                            <div className={[['row'], ['followus-mobile']]}>
                            
                                <div className={Style['img1-mobileFooter']}></div>
                                <div className={Style['img2-mobileFooter']}></div>
                                <div className={Style['img3-mobileFooter']}></div>
                                <div className={Style['img4-mobileFooter']}></div>

                            </div>
                
                        </div>
                        </div>
                    </div>
                    </div> 



                    <div className="container ">
                        <div className="row">
                        <div className={[['col'], Style['footer'], Style['text-center']].join(' ')}>
                            <p>© 2020 Tickitz. All Rights Reserved.</p>
                        </div>
                        </div>
                    </div>
                    {/* <!-- AKHIR JUMBOTRON4 --></div> */}
            </div>
        )
    }
}

export default Footer
