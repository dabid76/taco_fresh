import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'nuka-carousel';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




import A0 from '../images/A0.jpg'
import A1 from '../images/A1.jpg'
import A2 from '../images/A2.jpg'
import A3 from '../images/A3.jpg'
import A4 from '../images/A4.jpg'

import A5 from '../images/A5.jpg'
import A6 from '../images/A6.jpg'
import A7 from '../images/A7.jpg'
import A8 from '../images/A8.jpg'
import A9 from '../images/A9.jpg'
import A10 from '../images/A10.jpg'
import A11 from '../images/A11.jpg'

class TacosPhoto extends Component {

    render() {
    
    return (
        <div className="photo">
            <h1>
                Tacos Gallery
            </h1>
            <Carousel className="carousel" >
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A0}
                            />
                            <img
                                className="carouselImg"
                                src={A1}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A2}
                            />
                            <img
                                className="carouselImg"
                                src={A3}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A4}
                            />
                            <img
                                className="carouselImg"
                                src={A5}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A6}
                            />
                            <img
                                className="carouselImg"
                                src={A7}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A8}
                            />
                            <img
                                className="carouselImg"
                                src={A9}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A10}
                            />
                            <img
                                className="carouselImg"
                                src={A11}
                            />
                    </Carousel.Item>
                </Carousel>
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(TacosPhoto);