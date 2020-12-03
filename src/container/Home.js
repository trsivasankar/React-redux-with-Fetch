import React,{Component}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LatestMovies, Gallery} from '../actions';
import LatestMoviesDisplay from '../component/Home/LatestMoviesDisplay';
import GalleryDisplay from '../component/Home/SiderGallery';


class Home extends Component{

    componentDidMount(){

        this.props.dispatch(LatestMovies());
        this.props.dispatch(Gallery());
        

    }

    render(){

        return( 
            <div>
                <GalleryDisplay gdata={this.props.gallerylist.uGallery}/>        
               <LatestMoviesDisplay ldata={this.props.datalist.lMovie}/>
               
               
            </div> 
            )
    }


}

function mapStateToProps(state){
    // console.log(state);
    return{
        datalist:state.latestmovies,
        gallerylist:state.gallery

       
        

    }
}

Home.protoType={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)