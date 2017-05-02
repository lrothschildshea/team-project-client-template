import React from 'react';
import {Link, hashHistory} from 'react-router'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
    this.state = {
      searchType: "people"
    }
  }

  handleSearch() {
    // // Prevent the event from "bubbling" up the DOM tree.
    // e.preventDefault();
    // // Trim whitespace from beginning + end of entry.
    // var searchText = this.state.value.trim();
    // var type = this.state.searchType;
    // var genre = this.props.genre;
    // var instrument = this.props.instrument;
    // var zipcode = this.props.zipcode;
    // if (searchText !== "") {
    //   /* TODO: How do we send the post to the server + update the Feed? */
    //   this.props.onPost(this.state);
    //   hashHistory.push({ pathname: "/search/result", query: {q: searchText, t:type, g:genre, i:instrument, z:zipcode} });
    // }
    this.props.onEntered({value: this.state.value});
    this.props.onPost({value: this.state.value, searchType: this.state.searchType})
  }

  handlePeople(){
    //e.preventDefault();
    this.setState({searchType:"people"})
    this.props.onEntered({searchType:"people"})
  }

  handleBands(){
    //e.preventDefault();
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

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      this.handleSearch(e);
    }
  }

//<button className="btn btn-info btn-lg" type="button" onClick={(e) => this.handleSearch(e)}>
  render() {
    return(
      <div>
        <h2>Search</h2>
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-lg" placeholder="Enter Keywords" value={this.state.value} onChange={(e) => this.handleChange(e)} onKeyUp={(e) => this.handleKeyUp(e)}/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" onClick={(e) => this.handleSearch(e)}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
          </div>
        </div>
        <label className="radio-inline"><input type="radio" checked={this.state.searchType === "people"} onClick={(e) => this.handlePeople(e)}/>People</label>
        <label className="radio-inline"><input type="radio" checked={this.state.searchType === "band"} onClick={(e) => this.handleBands(e)}/>Bands</label>
      </div>
    )
  }
}
