import React from 'react';
import {Link} from 'react-router'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

  handleSearch(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var searchText = this.state.value.trim();
    if (searchText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */
      this.props.onPost(this.state);
      // Reset status update.
      this.setState({value: ""});
    }
  }

  handlePeople(e){
    e.preventDefault();
    this.setState({searchType:"people"})
    this.props.onEntered({searchType:"people"})
  }

  handleBands(e){
    e.preventDefault();
    this.setState({searchType:"band"})
    this.props.onEntered({searchType:"band"})

  }

  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    this.setState({value: e.target.value});
    this.props.onEntered({value:e.target.value})
  }
//<button className="btn btn-info btn-lg" type="button" onClick={(e) => this.handleSearch(e)}>
  render() {
    return(
      <div>
        <h2>Search</h2>
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-lg" placeholder="Enter Keywords" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
            <span className="input-group-btn">
              <Link className="btn btn-info btn-lg"to={this.props.link}>
                <i className="glyphicon glyphicon-search"></i>
              </Link>
            </span>
          </div>
        </div>
        <label className="radio-inline"><input type="radio" name="optradio" onClick={(e) => this.handlePeople(e)}/>People</label>
        <label className="radio-inline"><input type="radio" name="optradio" onClick={(e) => this.handleBands(e)}/>Bands</label>
      </div>
    )
  }
}
