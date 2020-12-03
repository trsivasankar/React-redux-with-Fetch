import {combineReducers} from 'redux';
import latestmovies from './latest_movies_reducers';
import upcoming from './upcoming_movies_reducers';
import events from './events_reducers';
import gallery from './slider_gallery';

const rootReducer = combineReducers({

    latestmovies,
    upcoming,
    events,
    gallery


})

export default rootReducer;

