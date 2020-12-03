import React,{Component}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {UpcomingMovies} from '../actions';
import UpcomingMoviesDisplay from '../component/Home/UpcomingMoviesDisplay';

class Home extends Component{

    componentDidMount(){

       
        this.props.dispatch(UpcomingMovies());

    }

    render(){

        return( 
            <div>      
               <UpcomingMoviesDisplay udata={this.props.datalist.uMovie} />
            </div> 
            )
    }


}

function mapStateToProps(state){
    console.log(state);
    return{
        datalist:state.upcoming
       
        

    }
}

Home.protoType={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)