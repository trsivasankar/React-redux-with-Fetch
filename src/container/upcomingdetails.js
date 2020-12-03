import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectedNews} from '../actions';
import {Link} from 'react-router-dom';


class UpcomingDetails extends Component {

    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <Link to={`/booking/${data.id}`} className="col-md-12" key={data.id}>
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="img-square-wrapper">
                                                <img class="" src={data.imageUrl} alt={data.imageUrl}/>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{data.name}</h4>
                                                <p class="card-text">{data.language}</p>
                                                <p class="card-text">{data.type}</p>
                                                <p class="card-text">{data.rate}</p>
                                                
                                                <button className="btn btn-primary">Book Now</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>                            
                    </Link>
                
                )
            })
        }
    }

    render(){
        return(
            
            <div className="home-latest">
            <div className="row">
            <div className="col-md-12 mt-4">
            <h2>Details Page</h2>
            </div>

            {this.renderDetails(this.props.upSelected)}
            </div>
        </div>

        )
    }

    // componentWillUnmount(){
    //     this.props.dispatch(clearSelectedNews())
    // }
}

function mapStateToProps(state){
    return{
        upSelected:state.upcoming
    }
}

UpcomingDetails.protoTypes ={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(UpcomingDetails);