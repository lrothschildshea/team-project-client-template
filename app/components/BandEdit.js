import React from 'react';
import {removeBandMember} from '../server.js';

export default class BandEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.band;
  }

  nameChange(e) {
    this.setState({name: e.target.value });
  }

  locationChange(e) {
    this.setState({location: e.target.value });
  }

  infoChange(e) {
    this.setState({info: e.target.value });
  }

  membersChange(e) {
    this.setState({members: e.target.value });
  }

  componentWillReceiveProps(props) {
    this.setState(props.band);
  }

  removeMember(e, id){
    e.preventDefault();
    if (e.button === 0) {
      removeBandMember(this.state._id, id, (memberList) => this.setState({members: memberList}));
    }
  }


  render() {
    return (
      <div
        className="modal fade"
        id="editBandModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel">
        <div
          className="modal-dialog modal-lg"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Edit Band
              </h4>
            </div>
            <div className="modal-body">
              <BandName name={this.state.name} change={this.nameChange.bind(this)}/>
              <BandLocation location={this.state.location} change={this.locationChange.bind(this)} />
              <BandInfo info={this.state.info} change={this.infoChange.bind(this)} />
              <EditBandMembers members={this.state.members} remove={this.removeMember.bind(this)} />
              <EditBandWanted wanted={this.state.wanted} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function BandName(props) {
  return (
    <div className="input-group">
      <span
        className="input-group-addon"
        id="basic-addon1">
        Band Name
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Band Name"
        aria-describedby="basic-addon1"
        value={props.name}
        onChange={(e) => props.change(e)} />
    </div>
  );
}

function BandLocation(props) {
  return (
    <div className="input-group">
      <span
        className="input-group-addon"
        id="basic-addon2">
        Location
        <span className="glyphicon glyphicon-map-marker">
        </span>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Location"
        aria-describedby="basic-addon2"
        value={props.location}
        onChange={(e) => props.change(e)} />
    </div>
  )
}

function BandInfo(props) {
  return (
    <div className="input-group">
      <span
        className="input-group-addon"
        id="basic-addon2">
        Info
        <span className="glyphicon glyphicon-info-sign">
        </span>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Band info"
        aria-describedby="basic-addon2"
        value={props.info}
        onChange={(e) => props.change(e)} />
    </div>
  )
}

function BandPicture(props) {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-default">
        Upload new cover photo
        <span className="glyphicon glyphicon-floppy-open">
        </span>
      </button>
    </div>
  )
}


class EditBandMembers extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Edit Members
        </div>
        <ul className="list-group">
          {this.props.members.map((member) =>
            <li key={member.fullName} className="list-group-item">
              {member.fullName}
              <a onClick={(e) => this.props.remove(e, member._id)}>
                <span className="glyphicon glyphicon-trash pull-right" />
              </a>
            </li>
          )}
        </ul>
        <div className="panel-footer">
          Add Members
          <a href="#">
            <span className="glyphicon glyphicon-plus pull-right" />
          </a>
        </div>
      </div>
    )
  }
}

class EditBandWanted extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Wanted</div>
        <ul className="list-group">
          {this.props.wanted.map((want) =>
            <li key={want} className="list-group-item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      id="basic-addon1">Instrument</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Instrument"
                      aria-describedby="basic-addon1"
                      value={want} />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-trash">
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
        <div className="panel-footer">
          Add Wanted Posting
          <a href="#">
            <span className="glyphicon glyphicon-plus pull-right" />
          </a>
        </div>
      </div>
    )
  }
}
