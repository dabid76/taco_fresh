import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import A0 from '../images/A0.jpg'
import A1 from '../images/A1.jpg'
import A2 from '../images/A2.jpg'
import A3 from '../images/A3.jpg'
import A4 from '../images/A4.jpg'


class TacosPhoto extends Component {

    render() {
    return (
        <div className="contact">
            <h2>
                Tacos Gallery
            </h2>

                <img src={A0} width="100vw" height="100vh" />
                <img src={A1} width="100vw" height="100vh" />
                <img src={A2} width="100vw" height="100vh" />
                <img src={A3} width="100vw" height="100vh" />
                <img src={A4} width="100vw" height="100vh" />
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