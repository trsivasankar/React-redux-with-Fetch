import React,{Component}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Events} from '../actions';
import EventsDisplay from '../component/Home/EventsDisplay';

class Home extends Component{

    componentDidMount(){

       
        this.props.dispatch(Events());

    }

    render(){

        return( 
            <div>      
               <EventsDisplay neven={this.props.datalist.nEvents} />
            </div> 
            )
    }


}

function mapStateToProps(state){
    console.log(state);
    return{
        datalist:state.events
       
        

    }
}

Home.protoType={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)