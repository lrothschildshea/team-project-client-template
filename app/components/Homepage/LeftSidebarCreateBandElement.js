import React from 'react';
import {Link} from 'react-router';

export default class LeftSidebarCreateBandElement extends React.Component {
  render() {
    return (
      <li role="presentation">
          <Link to={"/band/1"}>Create a Band
            <span className="badge pull-right">+</span>
          </Link>
      </li>
    )
  }
}
