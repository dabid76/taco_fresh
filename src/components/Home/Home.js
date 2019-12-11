import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Home.css'
import A0 from '../images/A0.jpg'
import A1 from '../images/A1.jpg'
import A2 from '../images/A2.jpg'
import A3 from '../images/A3.jpg'
import A4 from '../images/A4.jpg'

import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'
import T4 from '../images/T4.jpg'
import T5 from '../images/T5.jpg'



class Home extends Component {
    menu = (propertyName) =>{
        console.log('this is happening', propertyName)
        if (propertyName === 'Tacos') {
            this.props.history.push('/tacos')
            this.setState({ open: false });
        } else if (propertyName === 'Rolls') {
            this.props.history.push('/rolls')
            this.setState({ open: false });
        } else if (propertyName === 'Drinks') {
            // this.props.history.push('/drinks')
            this.setState({ open: false });
        } else if (propertyName === 'Appetizers') {
        this.props.history.push('/appetizers')
        this.setState({ open: false });
        }
    }

    render() {
    return (
        <div className="home">
            <p>
                Description of what the restaurant is.
            </p>
        {/* <div className="grid-container"> */}
        <main className="flexbox">
            <div className="grid-item" onClick={(event) => this.menu('Tacos', event)}>
                <img src={A0} width="90%" height="100vh" />
                <img src={A1} width="90%" height="100vh" />
                <img src={A2} width="90%" height="100vh" />
                <img src={A3} width="90%" height="100vh" />
                <img src={A4} width="90%" height="100vh" />
                Tacos
            </div>
            <div className="grid-item" onClick={(event) => this.menu('Rolls', event)}>
                <img src={T1} width="90%" height="100vh" />
                <img src={T2} width="90%" height="100vh" />
                <img src={T3} width="90%" height="100vh" />
                <img src={T4} width="90%" height="100vh" />
                <img src={T5} width="90%" height="100vh" />
                Rolls
            </div>
            <p className="grid-item" onClick={(event) => this.menu('Appetizers', event)}>Appetizers</p>
            <p className="grid-item" onClick={(event) => this.menu('Drinks', event)}>Drinks</p>
        </main>
        </div>
        // </div>
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Home);