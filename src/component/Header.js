import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a class="navbar-brand" href="#">Online Movie Ticket</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    
                                    <Link class="nav-link" to="/latest">Latest Movies </Link>
                                </li>
                                <li class="nav-item ">                                    
                                    <Link class="nav-link" to="/upcoming">Upcoming Movies</Link>
                                </li>
                                <li class="nav-item ">                                    
                                    <Link class="nav-link" to="/nearby">Nearby Events</Link>
                                </li>
                              
                            
                                
                                </ul>
                                
                            </div>
                </nav>

    </header>       
            
    )

}

export default Header;