import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Menu.css'
import logo from '../images/logo.jpg'

class MenuItem extends Component {

//   state = {
//     animation: 'overlay',
//     hidden: false,
//   }

  render () {
    return (
        <div className="navBack">
            <div className="sidebar">
        <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible
            width='0px' 
        >
            <Link to="/home">
                <Menu.Item as='a'>
                    <img src={logo} height='50px' width='50px' position='fixed' />
                {/* Logo */}
                </Menu.Item>
            </Link>

            <Link  to="/about">
                <Menu.Item as='a'>
                        About us
                </Menu.Item>
            </Link>

            <Link  to="/contact">
                <Menu.Item as='a'>
                        Contact
                </Menu.Item>
            </Link>

            <Link  to="/photo">
                <Menu.Item as='a'>
                        Photo Gallary
                </Menu.Item>
            </Link>

            <Link  to="/drinks">
                <Menu.Item as='a'>
                        Drinks
                </Menu.Item>
            </Link>

            <Link  to="/info">
                <Menu.Item as='a'>
                        Info
                </Menu.Item>
            </Link>

        </Sidebar>
        </div>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MenuItem));
