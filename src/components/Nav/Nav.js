import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Nav extends Component {
  
  state = {
  expanded: false
}

handleExpand = () => {
  this.setState({
      expanded: !this.state.expanded,
      hidden: false,
      animation: 'push',
  })
}

render () {
  return (

  <div className="nav">
    <Link to="/home">
    </Link>
    <div className="nav-right">
      {/* Always show this link since the about page is not protected */}
      <ExpansionPanel expanded={this.state.expanded} onChange={this.handleExpand}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor:'black', color: 'red',}}
                    >   Menu 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Table>
                            <TableBody>
                            <TableRow>
                            <Link className="nav-link" to="/food">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Dine</TableCell>
                            </Link>
                            </TableRow>                               
                            <TableRow>
                            <Link className="nav-link" to="/drinks">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Drinks</TableCell>
                            </Link>
                                </TableRow>
                            <TableRow>
                            <Link className="nav-link" to="/happy">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Happy Hours</TableCell>
                            </Link>
                            </TableRow>
                            </TableBody>
                            </Table>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
      <Link className="nav-link" to="/about">
      About
      </Link>
      <Link className="nav-link" to="/photo">
      Gallary
      </Link>
      <Link className="nav-link" to="/private">
      Private Events
      </Link>
    </div>
  </div>
  );
}
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
