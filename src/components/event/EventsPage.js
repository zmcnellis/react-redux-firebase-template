import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getEvents} from '../../actions/getEvents';

class EventsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.onGetEvents();
  }

  render() {
    let eventList = null;
    console.log(this.props);
    if (this.props.events.eventList) {
      const events = this.props.events.eventList;
      eventList = Object.keys(events).map(function(key) {
        return (
          <div>
          <span className="glyphicon glyphicon-user"></span>
          <div className="row">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Name:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {events[key].name}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Address:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {events[key].address1}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Date:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {events[key].date}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Time:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {events[key].time}
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
        <h1>Events</h1>
        {eventList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetEvents: () => dispatch(getEvents())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
