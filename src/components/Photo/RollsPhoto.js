import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'
import T4 from '../images/T4.jpg'
import T5 from '../images/T5.jpg'


class RollsPhoto extends Component {

    render() {
    return (
        <div className="contact">
            <h2>
                Rolls Gallery
            </h2>
                <img src={T1} width="100vw" height="100vh" />
                <img src={T2} width="100vw" height="100vh" />
                <img src={T3} width="100vw" height="100vh" />
                <img src={T4} width="100vw" height="100vh" />
                <img src={T5} width="100vw" height="100vh" />
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