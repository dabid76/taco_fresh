import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'
import T4 from '../images/T4.jpg'
import T5 from '../images/T5.jpg'

class RollsPhoto extends Component {

    render() {
    return (
        <div className="photo">
            <h1>
                Rolls Gallery
            </h1>
            <Carousel className="carousel" >
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T1}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T2}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T3}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T4}
                            />
                    </Carousel.Item>
                    <Carousel.Item >
                            <img
                                className="carouselImg"
                                src={T5}
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
  
  export default connect(mapStateToProps)(RollsPhoto);