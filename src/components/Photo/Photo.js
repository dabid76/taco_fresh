import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Photo.css'
import Grid from "@material-ui/core/Grid";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
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

  componentDidMount(id) {
    this.props.dispatch({type: 'GET_PIC'})
  } // end componentDidMount

    photo = (propertyName) =>{
        console.log('this is happening', propertyName)
    }

    // state = { 
    //   photoIndex: 0,
    //   isOpen: false 
    // }

    constructor(props) {
      super(props);
   
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }

    getPic(){
      this.props.dispatch({type: 'GET_PIC'})
      this.setState({
        isOpen: !this.state.isOpen
       });
    }
    
    handleShowDialog(id) {
      console.log('clicked', id);
      this.props.dispatch({type: 'GET_PIC_ID', payload: id})
      this.setState({
         isOpen: !this.state.isOpen
        });
    //   if (id === id) {
    //     this.setState({ isOpen: !this.state.isOpen});
    // } 
    // else{
    // }
  }

  // handleShowDialog = this.handleShowDialog.bind(this)

    render() {
      
      const { photoIndex, isOpen } = this.state;

      let pic = this.props.reduxStore.pictures.map((pictures, id) => {
        return (
                
          <div className="name" key={id} >
                  {/* <h1 key={id}>{pictures.title}</h1> */}
                  <img 
                    className="image"
                    src={pictures.image} 
                    alt={pictures.id} 
                    onClick={() => this.handleShowDialog(pictures.id)}/>
                  {/* {this.state.isOpen && (
                    <dialog
                      className="dialog"
                      style={{ position: 'absolute' }}
                      open
                    >
                      <img
                        className="image"
                        src={pictures.image} 
                        onClick={() => this.handleShowDialog(pictures.id)}
                        alt={pictures.id} 
                        />
                    </dialog>
                  )} */}
          </div>)
      }) // end map

    return (
      
        <div className="name">
        <Grid container spacing={16}>
          {pic}
        </Grid>
        <button type="button" onClick={() => this.getPic({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={pic[photoIndex]}
            nextSrc={pic[(photoIndex + 1) % pic.length]}
            prevSrc={pic[(photoIndex + pic.length - 1) % pic.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + pic.length - 1) % pic.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % pic.length,
              })
            }
          />
          )}
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