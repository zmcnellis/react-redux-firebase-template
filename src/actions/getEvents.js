import ActionTypes from './actionTypes';
import database from './database';

export function getEvents() {
  return dispatch => {
    dispatch(getEventsRequestedAction());
    return database.ref('events/').once('value', snap => {
      const events = snap.val();
      dispatch(getEventsFulfilledAction(events));
    })
    .catch((error) => {
      dispatch(getEventsRejectedAction());
    });
  };
}


function getEventsRequestedAction() {
  return {
    type: ActionTypes.GetEventsRequested
  };
}

function getEventsRejectedAction() {
  return {
    type: ActionTypes.GetEventsRejected
  };
}

function getEventsFulfilledAction(events) {
  return {
    type: ActionTypes.GetEventsFulfilled,
    events: events
  };
}
