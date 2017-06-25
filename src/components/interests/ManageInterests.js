import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getInterests} from '../../actions/getInterests';

class ManageInterests extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.onGetInterests();
  }

  render() {
    let interestList = null;
    if (this.props.interests.interestList) {
      const interests = this.props.interests.interestList;
      interestList = Object.keys(interests).map(function(key) {
        return (
          <div>
            <div className="row">
              <div className="row">
                <div className="col-sm-4 col-md-2">
                  <b>Name:</b>
                </div>
                <div className="col-sm-8 col-md-10">
                  {interests[key].name}
                </div>
              </div>
              <hr/>
            </div>
          </div>
        );
      });
    }


    return (
      <div>
        <h1>Manage Interests</h1>
        {interestList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    interests: state.interests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInterests: () => dispatch(getInterests())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInterests);
