import React, { Component } from 'react';
import './InfoPage.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div className="info">
//     <p>
//       Info About the place
//     </p>
//   </div>
// );

class InfoPage extends Component {

  render() {
  return (
      <div className="info">
        <p>
          Info About the place
        </p>
      </div>
    );
  }
}

export default InfoPage;
