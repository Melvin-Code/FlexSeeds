import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to='/about'>About</Link>
                <Link to='/benefits'>Benefits</Link>
                <Link to='/nutrition'>Nutition</Link>
                <Link to='/recepies'>Recepies</Link>
            </div>
        );
    }
}

export default NavBar;