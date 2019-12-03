import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Menu.css'


class MenuItem extends Component {

//   state = {
//     animation: PropTypes.string,
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
            width='thin' 
        >
            <Link to="/home">
                <Menu.Item as='b'>
                Logo
                </Menu.Item>
            </Link>

            <Link  to="/about">
                <Menu.Item as='b'>
                        About us
                </Menu.Item>
            </Link>

            <Link  to="/contact">
                <Menu.Item as='b'>
                        Contact
                </Menu.Item>
            </Link>

            <Link  to="/photo">
                <Menu.Item as='b'>
                        Photo Gallary
                </Menu.Item>
            </Link>

            <Link  to="/drinks">
                <Menu.Item as='b'>
                        Drinks
                </Menu.Item>
            </Link>

            <Link  to="/info">
                <Menu.Item as='b'>
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
