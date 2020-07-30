import React from 'react';
import {Link} from 'react-router-dom'
import Sarcasm from './Sarcasm'
import Analysis from './Analysis';

const header=()=>{

    return(
        <nav className="navbar-expand-lg bg-dark">
        <div className="container">
            
            <div>
                <a href className="navbar-brand text-white">Text Analysis</a>
        </div>
        <div className="navbar">
            <ul className="navbar-nav nav ml-auto">
                <li className="nav-item"><Link to="/" className="nav-link">Sentiment</Link></li>
                <li className="nav-item"><Link to={{
                    pathname:"/sarcasm"
                }} className="nav-link">Sarcasm</Link></li>

            </ul>
            </div>
</div>

    </nav>

    );
    

}

export default header;