import React from 'react';
import {editBandInfo, getUser} from '../server.js';

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

  wantedInfoChange(e, index) {
    var tempwant = this.state.wanted.slice();
    tempwant[index].info = e.target.value;
    this.setState({wanted: tempwant});
  }

  wantedInstChange(e, index) {
    var tempwant = this.state.wanted.slice();
    tempwant[index].instrument = e.target.value;
    this.setState({wanted: tempwant});
  }

  componentWillReceiveProps(props) {
    this.setState(props.band);
  }

  removeMember(e, id){
    e.preventDefault();
    if (e.button === 0) {
      var members = this.state.members;
      var removeIndex = this.state.members.map((member) => member._id).indexOf(id);
      members.splice(removeIndex, 1);
      this.setState({"members": members})
    }
  }

  addMember(e, id){
    e.preventDefault();
    var addUser = (user) => {
      var members = this.state.members;
      var existingIndex = this.state.members.map((member) => member._id).indexOf(user._id);
      if (existingIndex == -1) {
        members.push(user)
        this.setState({"members": members})
      }
    };
    if (e.button === 0) {
      getUser(id, addUser);
    }
  }

  setInfo(e) {
    e.preventDefault();
    if (e.button === 0) {
      var newBand = this.state;
      newBand.members = newBand.members.map((member) => member._id);
      editBandInfo(this.state._id, this.state, (band) => this.setState(band));
    }
    this.props.refresh();
  }

  removeWanted(e, id){
    e.preventDefault();
    if (e.button === 0) {
      var newWanted = this.state.wanted;
      newWanted.splice(id, 1);
      this.setState({"wanted": newWanted});
    }
  }

  addWanted(e, want) {
    e.preventDefault();
    if (e.button === 0) {
      var newWanted = this.state.wanted;
      newWanted.push(want);
      this.setState({"wanted": newWanted});
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
              <EditBandMembers
                members={this.state.members}
                remove={this.removeMember.bind(this)}
                add={this.addMember.bind(this)} />
              <EditBandWanted
                wanted={this.state.wanted}
                infochange={this.wantedInfoChange.bind(this)}
                instchange={this.wantedInstChange.bind(this)}
                remove={this.removeWanted.bind(this)}
                add={this.addWanted.bind(this)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={(e) => this.setInfo(e)}>
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
  constructor(props) {
    super(props);
    this.state = {newMember: ""}
  }

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
          <div className="row">
            <div className="col-lg-4">Add Members</div>
            <div className="col-lg-4">
              <input
              type="text"
              className="form-control"
              placeholder="Member ID"
              aria-describedby="basic-addon1"
              value={this.state.newMember}
              onChange={(e) => this.setState({newMember: e.target.value })} />
            </div>
            <div className="col-lg-4">
              <a onClick={(e) => this.props.add(e, this.state.newMember)}>
                <span className="glyphicon glyphicon-plus pull-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class EditBandWanted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inst: "", info: ""};
  }

  infoChange(e) {
    this.setState({info: e.target.value });
  }

  instChange(e) {
    this.setState({inst: e.target.value });
  }


  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Wanted</div>
        <ul className="list-group">
          {this.props.wanted.map((want, id) =>
            <li key={id} className="list-group-item">
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
                      value={want.instrument}
                      onChange={(e) => this.props.instchange(e, id)} />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      id="basic-addon1">Info</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Info"
                      aria-describedby="basic-addon1"
                      value={want.info}
                      onChange={(e) => this.props.infochange(e, id)} />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={(e) => this.props.remove(e, id)}>
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
          <div className="row">
            <div className="col-lg-11">
              <div className="input-group">
                <span
                  className="input-group-addon"
                  id="basic-addon1">Add Wanted</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Instrument"
                  aria-describedby="basic-addon1"
                  value={this.state.inst}
                  onChange={(e) => this.setState({inst: e.target.value })} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Info"
                  aria-describedby="basic-addon1"
                  value={this.state.info}
                  onChange={(e) => this.setState({info: e.target.value })} />
              </div>
            </div>
            <div className="col-lg-1">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={(e) => {
                    this.props.add(e, {instrument: this.state.inst, info: this.state.info});
                    this.setState({inst: "", info: ""});}}>
                  <span className="glyphicon glyphicon-plus">
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
