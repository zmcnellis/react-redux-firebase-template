import {combineReducers} from 'redux';
import { eventsReducer } from './eventsReducer';
import { interestsReducer } from './interestsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  interests: interestsReducer
});

export default rootReducer;
