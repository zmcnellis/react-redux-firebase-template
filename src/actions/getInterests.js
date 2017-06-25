import ActionTypes from './actionTypes';
import database from './database';

export function getInterests() {
  return dispatch => {
    dispatch(getInterestsRequestedAction());
    return database.ref('interests/').once('value', snap => {
      const interests = snap.val();
      dispatch(getInterestsFulfilledAction(interests));
    })
    .catch((error) => {
      dispatch(getInterestsRejectedAction());
    });
  };
}


function getInterestsRequestedAction() {
  return {
    type: ActionTypes.GetInterestsRequested
  };
}

function getInterestsRejectedAction() {
  return {
    type: ActionTypes.GetInterestsRejected
  };
}

function getInterestsFulfilledAction(interests) {
  return {
    type: ActionTypes.GetInterestsFulfilled,
    interests: interests
  };
}
