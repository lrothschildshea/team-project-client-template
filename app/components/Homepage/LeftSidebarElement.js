import React from 'react';

export default class LeftSidebarElement extends React.Component {
  render() {
    return (
      <li role="presentation">
          <a href={this.props.linkPage}>{this.props.bandName}
            <span className="badge pull-right">{this.props.notification}</span>
          </a>
      </li>
    )
  }
}
