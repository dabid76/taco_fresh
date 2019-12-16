
import 'semantic-ui-css/semantic.min.css';
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import InfoPage from '../InfoPage/InfoPage';
import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import Contact from '../Contact/Contact';
import Photo from '../Photo/Photo';
import Home from '../Home/Home';
// import Drinks from '../Drinks/Drinks';
import './App.css';
import Menu from '../Menu/Menu';
import Food from '../Food/Food';
// import Rolls from '../Rolls/Rolls';
// import Appetizers from '../Appetizers/Appetizers';
import Nav from '../Nav/Nav';


// import styled from 'styled-components';

// const Head = styled.div`
//   position: flex;
//   z-index: 150;
// `

class App extends Component {

  render() {
    return (
      
      <Router>
        <div>
        <Nav />

        {/* <Head> */}
        <Menu/>
        {/* </Head> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            {/* <Route exact from="/" to="/home" path="/Home" component={Home} /> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              exact
              path="/about"
              component={AboutPage}
            />

            <Route
              exact
              path="/contact"
              component={Contact}
            />

            <Route
              exact
              path="/food"
              component={Food}
            />
{/* 
            <Route
              exact
              path="/rolls"
              component={Rolls}
            />

            <Route
              exact
              path="/appetizers"
              component={Appetizers}
            /> */}

            <Route
              exact
              path="/photo"
              component={Photo} 
            />

            {/* <Route
              exact
              path="/drinks"
              component={Drinks}
            /> */}

            <Route
              exact
              path="/info"
              component={InfoPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
