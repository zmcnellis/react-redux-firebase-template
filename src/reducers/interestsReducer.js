import ActionTypes from '../actions/actionTypes';

export function interestsReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetInterestsRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetInterestsRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting interests.'
      });
    }
    case ActionTypes.GetInterestsFulfilled: {
      const interests = action.interests;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got interest list.',
        interestList: interests
      });
      return newState;
    }
    default:
      return state;
  }
}
