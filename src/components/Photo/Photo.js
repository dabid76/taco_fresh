import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'

import Tacos from './TacosPhoto'
import Rolls from './RollsPhoto'
// import Appetizers from './AppetizersPhoto'
// import Drinks from './DrinksPhoto'
// import Restaurant from './RestaurantPhoto'


class Photo extends Component {

    photo = (propertyName) =>{
        console.log('this is happening', propertyName)
        // if (propertyName === 'Tacos Photo') {
        //     this.props.history.push('/tacosPhoto')
        //     this.setState({ open: false });
        // } 
        // else if (propertyName === 'Rolls') {
        //     this.props.history.push('/rolls')
        //     this.setState({ open: false });
        // } else if (propertyName === 'Drinks') {
        //     // this.props.history.push('/drinks')
        //     this.setState({ open: false });
        // } else if (propertyName === 'Appetizers') {
        // this.props.history.push('/appetizers')
        // this.setState({ open: false });
        // }
    }

    render() {
    return (
        <div className="contact">
            <h2>
                Photo Gallery
            </h2>
            <div onClick={() => this.photo('Tacos Photo')}>
                <Tacos />
            </div>
            <div onClick={(event) => this.photo('Rolls Photo', event)}>
                <Rolls />
            </div>
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Photo);