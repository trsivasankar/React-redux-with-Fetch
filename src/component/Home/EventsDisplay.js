import React from 'react';
import {Link} from 'react-router-dom';

const EventsDisplay = (props) => {

    const renderEvents = ({neven}) => {
        if(neven) {
        return neven.map((data) => {
            return(

                <Link to="/nearby" className="col-md-3" key={data.id}>
                  

                    <div className="card">
                        <img src={data.imageUrl} alt={data.imageUrl}/> 
                        <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.language}</p>
                       
                        </div>
                        </div>


                </Link>

            )

        })
        }
    }

    return(
        
        <div className="home-latest">
            <div className="row">
            <div className="col-md-12 mt-4">
            <h2>Upcoming Movies</h2>
            </div>

            {renderEvents(props)}
            </div>
            
            
        </div>

    )

} 

export default EventsDisplay;