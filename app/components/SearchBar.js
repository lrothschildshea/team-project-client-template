import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchType: ""
    };
  }

  handleSearch(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var searchText = this.state.value.trim();
    if (searchText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */
      this.props.onPost(searchText);
      // Reset status update.
      this.setState({value: ""});
    }
  }

  handlePeople(e){
    e.preventDefault();
    this.setState({searchType:"people"})
  }

  handleBands(e){
    e.preventDefault();
    this.setState({searchType:"band"})
  }

  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    this.setState({value: e.target.value});
  }

  render() {
    return(
      <div>
        <h2>Search</h2>
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-lg" placeholder="Enter Keywords" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button" onClick={(e) => this.handleSearch(e)}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
          </div>
        </div>
        <label className="radio-inline"><input type="radio" name="optradio" onClick={(e) => this.handlePeople(e)}/>People</label>
        <label className="radio-inline"><input type="radio" name="optradio" onClick={(e) => this.handleBands(e)}/>Bands</label>
      </div>
    )
  }
}
