import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Segment, Sidebar, Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Menu.css'
import logo from '../images/logo.jpg'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class MenuItem extends Component {

    state = {
        expanded: false
    }

    handleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

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
                </Menu.Item>
            </Link>

            <ExpansionPanel expanded={this.state.expanded} onChange={this.handleExpand}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor:'#1b1c1d', color: 'white',}}
                    >   Menu
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Table>
                            <TableBody>
                            <TableRow>
                            <Link className="nav-link" to="/tacos">
                                <TableCell style={{backgroundColor:'#1b1c1d', color: 'white',}}>Tacos</TableCell>
                            </Link>
                            </TableRow>                               
                            <TableRow>
                            <Link className="nav-link" to="/rolls">
                                <TableCell style={{backgroundColor:'#1b1c1d', color: 'white',}}>Rolls</TableCell>
                            </Link>
                                </TableRow>
                            <TableRow>
                            <Link className="nav-link" to="/appetizers">
                                <TableCell style={{backgroundColor:'#1b1c1d', color: 'white',}}>Appetizers</TableCell>
                            </Link>
                            </TableRow>
                            <TableRow>
                            <Link className="nav-link" to="/drinks">
                                <TableCell style={{backgroundColor:'#1b1c1d', color: 'white',}}>Drinks</TableCell>
                            </Link>
                            </TableRow>
                            </TableBody>
                            </Table>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

            {/* <Link  to="/about">
                <Menu.Item as='a'>
                        About us
                </Menu.Item>
            </Link> */}

            <Link  to="/photo">
                <Menu.Item as='a'>
                        Photo Gallary
                </Menu.Item>
            </Link>

            {/* <Link  to="/drinks">
                <Menu.Item as='a'>
                        Drinks
                </Menu.Item>
            </Link> */}

            <Link  to="/info">
                <Menu.Item as='a'>
                        Info
                </Menu.Item>
            </Link>

            <Link  to="/contact">
                <Menu.Item as='a'>
                        Contact
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
