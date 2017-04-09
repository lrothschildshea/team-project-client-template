import React from 'react';

export default class BandEdit extends React.Component {
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
              <BandName name={this.props.band.name} />
              <BandLocation location={this.props.band.location} />
              <BandInfo info={this.props.band.info} />
              <EditBandMembers members={this.props.band.members} />
              <EditBandWanted wanted={this.props.band.wanted} />
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
        value={props.name} />
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
        value={props.location} />
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
        value={props.info} />
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
            <li key={member.id} className="list-group-item">
              {member.name}
              <a href="#">
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
            <li key={want.id} className="list-group-item">
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
                      value={want.instrument} />
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
                      value={want.info} />
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
