import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Wiki Countries</Link>
      </div>
    );
  }
}

export default Navbar;