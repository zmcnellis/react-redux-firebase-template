import ActionTypes from '../actions/actionTypes';

export function eventsReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetEventsRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetEventsRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting events.'
      });
    }
    case ActionTypes.GetEventsFulfilled: {
      const events = action.events;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got event list.',
        eventList: events
      });
      return newState;
    }
    default:
      return state;
  }
}
