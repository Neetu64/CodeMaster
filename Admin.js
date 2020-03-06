import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Admin extends Component {
    render() {
        return (
            <div>
               <h1> This is an admin page, Only authorized people can see.</h1> 
               <Link to="/logout">Logout</Link>
            </div>
        );
    }
}
