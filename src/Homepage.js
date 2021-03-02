import React from 'react';
import { Link } from 'react-router-dom'

function Homepage(props) {
    return (
        <div>
            <h1>IZ*Feed</h1>
            <Link to='/news'> <p> News </p> </Link>
            <Link to='/gallery'> <p> Gallery </p> </Link>
            <Link to='/twitter'> <p> Twitter </p> </Link>
        </div>
    );
}

export default Homepage;
