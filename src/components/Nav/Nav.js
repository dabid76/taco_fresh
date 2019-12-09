import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
    </Link>
    <div className="nav-right">
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/tacos">
        Tacos
      </Link>
      <Link className="nav-link" to="/rolls">
        Rolls
      </Link>
      <Link className="nav-link" to="/appetizers">
        Appetizers
      </Link>
      <Link className="nav-link" to="/drinks">
        Drinks
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
