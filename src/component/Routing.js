import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Upcoming from '../container/Upcoming';
import Events from '../container/Events';
import Header from './Header';
import Footer from './Footer';
import UpcomingDetails from '../container/upcomingdetails';
import Booking from '../container/Booking';
import ticketBooking from '../component/Home/ticketbooked';



const Routing =()=> {
    return(
    <BrowserRouter>
        <Header/>
        <div>
            <Route exact path="/latest" component={Home}/> 
            <Route exact path="/upcoming" component={Upcoming}/> 
            <Route exact path="/nearby" component={Events}/>
            <Route exact path="/upcomingdetails/:id" component={UpcomingDetails}/>
            <Route exact path="/booking/:id" component={Booking}/>
            <Route exact path="/ticketbooked" component={ticketBooking}/>
        </div>
        <Footer/>
    </BrowserRouter>
)

}

export default Routing;