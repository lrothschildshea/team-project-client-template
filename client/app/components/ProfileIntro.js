import React from 'react';

export default class ProfileIntro extends React.Component {
  render() {
    return (
      <div className="panel info-section">
        <div className="panel-heading">
          <h2 className="panel-title">Introduction</h2>
        </div>
        <div className="panel-body">
          <ContactInfo phone={this.props.profile.phone} email={this.props.profile.email} />
          <Location location={this.props.profile.location} />
          <Summary summary={this.props.profile.summary} />
          <Level level={this.props.profile.level} />
        </div>
      </div>
    )
  }
}

class ContactInfo extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Contact Info:</h3>
        </div>
        <div className="panel-body">
          <ul>
            <li><h4><strong>Phone: </strong></h4>{this.props.phone}</li>
            <li><h4><strong>Email: </strong></h4>{this.props.email}</li>
          </ul>
        </div>
      </div>
    )
  }
}

class Location extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Location:</h3>
        </div>
        <div className="panel-body">
          <ul>
            <li><h4><strong>Town: </strong></h4>{this.props.location.town}</li>
            <li><h4><strong>State: </strong></h4>{this.props.location.state}</li>
            <li><h4><strong>Country: </strong></h4>{this.props.location.country}</li>
            <li><h4><strong>Zipcode: </strong></h4>{this.props.location.zipcode}</li>
          </ul>
        </div>
      </div>
    )
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Summary:</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

class Level extends React.Component {
  render(){
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Level:</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.level}</p>
        </div>
      </div>
    )
  }
}
