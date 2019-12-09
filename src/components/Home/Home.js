import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Home.css'


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
            // this.props.history.push('/preregister')
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
            <p className="grid-item" onClick={(event) => this.menu('Tacos', event)}>Tacos</p>
            <p className="grid-item" onClick={(event) => this.menu('Rolls', event)}>Rolls</p>
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