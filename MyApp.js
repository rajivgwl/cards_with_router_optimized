import React from 'react';
import ReactDOM from 'react-dom';
import Spades from './Spades.js';
import Hearts from './Hearts.js';
import Diamonds from './Diamonds.js';
import Clubs from './Clubs.js';

var { Link } = ReactRouter;


class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li> <Link to="/"> Home </Link>     </li>
          <li> <Link to="Spades"> Spades </Link>     </li>
           <li> <Link to="Diamonds"> Diamonds </Link> </li>
          <li> <Link to="Hearts"> Hearts </Link></li>
          <li> <Link to="Clubs"> Clubs </Link></li>

        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MyApp;
