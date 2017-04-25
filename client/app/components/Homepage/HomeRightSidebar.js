import React from 'react';
import EventWidget from '../EventWidget.js';

export default class HomeRightSidebar extends React.Component {
  render() {
    return(
      <div className="col-md-3 col-md-offset-9">
          <div className="right-sidebar">
            <EventWidget user={this.props.user} page="homepage"/>
          </div>
      </div>
    )
  }
}
