import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Photo.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";


import Tacos from './TacosPhoto'
import Rolls from './RollsPhoto'

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


import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'
import T4 from '../images/T4.jpg'
import T5 from '../images/T5.jpg'

class Photo extends Component {

    photo = (propertyName) =>{
        console.log('this is happening', propertyName)
        // if (propertyName === 'Tacos Photo') {
        //     this.props.history.push('/tacosPhoto')
        //     this.setState({ open: false });
    }

    state = { 
        isOpen: false 
    }
    
    handleShowDialog = (event, propertyName) => {
      console.log('clicked', propertyName, event.target);
      // this.setState({
      //    isOpen: !this.state.isOpen
      //   });
      if (propertyName === 'One') {
        this.setState({ isOpen: !this.state.isOpen});
    } else if (propertyName === 'two'){
        this.setState({ isOpen: !this.state.isOpen });
    }
  }

  handleShowDialog = this.handleShowDialog.bind(this)

    render() {
    return (
        <div className="name">
            {/* <h2>
                Photo Gallery
            </h2>
            <div  onClick={() => this.photo('Tacos Photo')}>
                <Tacos />
            </div>
            <div onClick={(event) => this.photo('Rolls Photo', event)}>
                <Rolls />
            </div> */}
<img
className="image"
src={A0}
onClick={(event) => this.handleShowDialog.bind(this)(event, 'One')}
alt="one"
/>
{/* <img
className="image"
src={A1}
onClick={(event) => this.handleShowDialog.bind(this)(event, 'two')}
alt="two"
/> */}
{this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            // onClick={(event) => this.handleShowDialog.bind(this)(event, 'one')}
          >
            <img
              className="image"
              src={A0}
              onClick={(event) => this.handleShowDialog.bind(this)(event, 'One')}
              alt="one"
            />
            {/* <img
              className="image"
              src={A1}
              onClick={(event) => this.handleShowDialog.bind(this)(event, 'two')}
              alt="two"
            /> */}
          </dialog>
        )}
<img
className="image"
src={A1}
onClick={(event) => this.handleShowDialog.bind(this)(event, 'two')}
alt="two"
/>
{this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
          >
            <img
              className="image"
              src={A1}
              onClick={(event) => this.handleShowDialog.bind(this)(event, 'two')}
              alt="two"
            />
          </dialog>
        )}

{/* <img
className="image"
src={A2}
/>
<img
className="image"
src={A3}
/>
<img
className="image"
src={A4}
/>
<img
className="image"
src={A5}
/>
<img
className="image"
src={A6}
/>
<img
className="image"
src={A7}
/>
<img
className="image"
src={A8}
/>
<img
className="image"
src={A9}
/>
<img
className="image"
src={A10}
/>
<img
className="image"
src={A11}
/>
<img
className="image"
src={T1}
/>
<img
className="image"
src={T2}
/>
<img
className="image"
src={T3}
/>
<img
className="image"
src={T4}
/>
<img
className="image"
src={T5}
/> */}


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