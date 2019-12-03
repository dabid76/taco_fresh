import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Menu.css'


class MenuItem extends Component {

  state = {
    hidden: false,
    animation: 'overlay',

}

  render () {
    return (
        <div className="navBack">
            <div className="sidebar">
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => this.setState({hidden: false})}
            vertical
            visible={this.state.hidden}
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
        </Sidebar>
            </div>
                <div className='fp-panel-main'>
                    <Sidebar.Pusher dimmed={this.state.hidden}>
                        <Segment basic textAlign="left">
                            <Link to="/home">
                            </Link>
                        <Button onClick={()=>{this.setState({hidden: true})}}>
                            <Icon name="sidebar" color='blue'/>
                            Menu
                        </Button>
                        </Segment>
                    </Sidebar.Pusher>
                </div>
            </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MenuItem));
