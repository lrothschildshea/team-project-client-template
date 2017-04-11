import React from 'react';
import {Link} from 'react-router';

export default class LeftSidebarElement extends React.Component {
  render() {
    return (
      <li role="presentation">
          <Link to={"/band/" + this.props.band._id}>{this.props.band.name}
            <span className="badge pull-right">{this.props.notification}</span>
          </Link>
      </li>
    )
  }
}
