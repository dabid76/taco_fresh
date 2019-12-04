import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Tacos.css'

class Tacos extends Component {

    render() {
    return (
        <div className="tacos">
            <h2>
                Tacos
            </h2>
            <p>
                tacos list
            </p>
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Tacos);