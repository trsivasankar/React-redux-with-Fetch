import React from 'react';
import {Link} from 'react-router-dom';

const UpcomingMoviesDisplay = (props) => {

    const renderUpcoming = ({udata}) => {
        if(udata) {
        return udata.map((data) => {
            return(

                <Link to={`/upcomingdetails/${data.id}`} key={data.id} className="col-md-3" >
                     

                    <div className="card">
                        <img src={data.imageUrl} alt={data.imageUrl}/> 
                        <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.language}</p>
                        <button className="btn btn-primary">Book</button>
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

            {renderUpcoming(props)}
            </div>
        </div>

    )

} 

export default UpcomingMoviesDisplay;