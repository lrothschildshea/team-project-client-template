import React from 'react';
import SearchBar from './SearchBar.js';
import {search} from '../server'
import {hashHistory, Link} from 'react-router'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  handleSearch(contents) {
    // Prevent the event from "bubbling" up the DOM tree.
    //e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    //var searchText = this.state.value.trim();
    var searchText = contents.value;
    var type = contents.searchType;
    // var genre = this.state.genre;
    // var instrument = this.state.instrument;
    // var zipcode = this.state.zipcode;
    var genre = "";
    var instrument ="";
    var zipcode="";
    if (searchText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */
      //this.props.onPost(this.state);
      hashHistory.push({ pathname: "/search/result", query: {q: searchText, t:type, g:genre, i:instrument, z:zipcode} });
    }
    this.refresh();
  }

  refresh() {
    var searchTerm = this.getSearchTerm();
    var searchType = this.getSearchType();
    var query = {
      term:searchTerm,
      type:searchType
    }

    if (searchTerm !== "") {
      search("1", query, (feedItems) => {
        this.setState({
          results: feedItems
        });
      });
    }
  }

  componentDidMount() {
    this.refresh();
  }

  updateState(contents){
    this.setState(contents)

  }

  componentWillReceiveProps(props){
    this.refresh();
  }

  //  Object.keys(this.props.data).map(key) => {
  //        <SearchResult name={this.props.data._id.fullName}></SearchResult>
  //      });

  getSearchTerm() {
    // If there's no query input to this page (e.g. /foo instead of /foo?bar=4),
    // query may be undefined. We have to check for this, otherwise
    // JavaScript will throw an exception and die!
    var queryVars = this.props.location.query;
    var searchTerm = "";
    if (queryVars && queryVars.q) {
      searchTerm = queryVars.q;
      // Remove extraneous whitespace.
      searchTerm.trim();
    }
    return searchTerm;
  }

  getSearchType(){
    var queryVars = this.props.location.query;
    var searchType = "";
    if (queryVars && queryVars.t) {
      searchType = queryVars.t;
      // Remove extraneous whitespace.
      searchType.trim();
    }
    return searchType;
  }

  getSearchInstrument(){
    var queryVars = this.props.location.query;
    var searchInstrument = "";
    if (queryVars && queryVars.i) {
      searchInstrument = queryVars.i;
      // Remove extraneous whitespace.
      searchInstrument.trim();
    }
    return searchInstrument;
  }

  getSearchZipcode(){
    var queryVars = this.props.location.query;
    var searchZipcode = "";
    if (queryVars && queryVars.z) {
      searchZipcode = queryVars.z;
      // Remove extraneous whitespace.
      searchZipcode.trim();
    }
    return searchZipcode;
  }

  getSearchGenre(){
    var queryVars = this.props.location.query;
    var searchGenre = "";
    if (queryVars && queryVars.g) {
      searchGenre = queryVars.g;
      // Remove extraneous whitespace.
      searchGenre.trim();
    }
    return searchGenre;
  }
  // <div className="col-md-3">
  //   <SearchFilter onEntered={(postContents) => this.updateState(postContents)} zip={zip} instrument={inst} genre={genre}/>
  // </div>

  render() {
    var searchTerm = this.getSearchTerm();
    var searchType = this.getSearchType();
    var zip = this.getSearchZipcode();
    var inst = this.getSearchInstrument();
    var genre = this.getSearchGenre();

    return(
      <div>
        <div className="container-fluid searchbar-container">
          <div className="search-sidebar">
            <div className="row">

              <div className="col-md-1 feed"></div>
              <div className="col-md-10 col-md-offset-1 feed">
                <SearchBar value={searchTerm} searchType={searchType} onPost={(postContents) => this.handleSearch(postContents)} onEntered={(postContents) => this.updateState(postContents)} instrument={inst} genre={genre} zipcode={zip}/>
                <hr></hr>
                <ResultFeed searchTerm = {searchTerm} searchType={searchType} results={this.state.results}></ResultFeed>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

  handleInstrument(e) {
    e.preventDefault();
    if (e.button === 0) {

      this.setState({instrument: e.target.value});
      this.props.onEntered({instrument: e.target.textContent})
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <div id="accordion" className="panel panel-primary behclick-panel">
              <div className="panel-heading">
                <h3 className="panel-title">Search Filter</h3>
              </div>
              <div className="panel-body">
                <div className="panel-heading ">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#collapse0">
                      <i className="indicator fa fa-caret-down" aria-hidden="true"></i> Instrument
                      </a>
                    </h4>
                  </div>
                  <div id="collapse0" className="panel-collapse collapse in">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="Guitar" onClick={(e) => this.handleInstrument(e)} checked={this.state.instrument === "Guitar"}/>
                            Guitar
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="Drums" onClick={(e) => this.handleInstrument(e)} checked={this.state.instrument === "Drums"}/>
                            Drums
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="Bass" onClick={(e) => this.handleInstrument(e)} checked={this.state.instrument === "Bass"}/>
                            Bass
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value=""/>
                            Other
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="panel-heading ">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" href="#collapse1">
                        <i className="indicator fa fa-caret-down" aria-hidden="true"></i> Genre
                        </a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value="Rock" checked={this.props.genre === "Rock"}/>
                              Rock
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value="Jazz" checked={this.props.genre === "Jazz"}/>
                              Jazz
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value="Metal" checked={this.props.genre === "Metal"}/>
                              Metal
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/>
                              Other
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" href="#collapse3"><i className="indicator fa fa-caret-down" aria-hidden="true"></i> Location</a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label for="zip">Zipcode:</label>
                            <input type="text" className="form-control" id="zip" value={this.props.zip}/>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    class ResultFeed extends React.Component {
      constructor(props) {
        super(props);
      }

      componentWillReceiveProps(nextProps) {
        this.setState(nextProps)
      }

      render() {
        if(this.props.searchType == 'band'){
          return(
            <div className="results-feed">
              <ul className="list-unstyled">
                {
                  this.props.results.map((item) => {
                    return (
                      <BandResult name={item.name} description={item.info} key={item._id} bandId={item._id} wanted={item.wanted}/>
                    )
                  })
                }
              </ul>
            </div>
          )
        } else {
          return (
            <div className="results-feed">
              <ul className="list-unstyled">
                {
                  this.props.results.map((item) => {
                    return (
                      <PeopleResult name={item.fullName} image={item.profilePicture} location={item.location} email={item.email} key={item._id} profile={item._id}/>
                    )
                  })
                }
              </ul>
            </div>
          )
        }
      }
    }


    class BandResult extends React.Component{
      render(){
        var link = "/band/" + this.props.bandId

        // <ul>
        //   {
        //     this.props.wanted.map((item, i) => {
        //       return (<li key={i}>{item.instrument}</li>)
        //     })
        //   }
        // </ul>
        return(
          <div>
            <img className="d-flex align-self-start mr-3 media-img" src={this.props.image} alt="Generic placeholder image"/>
            <div className="media-body">
              <Link to={link}><h4 className="mt-0">{this.props.name}</h4></Link>
              <div className="row">
                <div className="col-md-2">
                  <p>Genre: {this.props.genre}</p>
                  <p>Looking for:</p>


                </div>
                <div className="col-md-10">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    class PeopleResult extends React.Component{
      render(){
        var link = "/profile/" + this.props.profile
        return(
          <div>
            <img className="d-flex align-self-start mr-3 media-img" src={this.props.image} alt="Generic placeholder image"/>
            <div className="media-body">
              <Link to={link}><h4 className="mt-0">{this.props.name}</h4></Link>
              <div className="row">
                <div className="col-md-12">
                  <p>{this.props.location}</p>
                  <p>{this.props.email}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
