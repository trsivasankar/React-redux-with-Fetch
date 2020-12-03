import React from 'react';
import {Link} from 'react-router-dom';

const LatestMoviesDisplay = (props) => {

    const renderLatest = ({ldata}) => {
        if(ldata) {
        return ldata.map((data) => {
            return(
                
                <Link to="/latest" className="col-md-3" key={data.id}>
                    
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
            <h2>Recommended Movies</h2>
            </div>
            {renderLatest(props)}
            </div>
        </div>

    )

} 

export default LatestMoviesDisplay;