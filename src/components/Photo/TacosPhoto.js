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


class TacosPhoto extends Component {

    render() {
    
    return (
        <div className="photo">
            <h2>
                Tacos Gallery
            </h2>
            <Carousel className="carousel" >
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={A0}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
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
                    </Carousel.Item>
                    <Carousel.Item >
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