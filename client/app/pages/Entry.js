import React from 'react';
import Navbar from '../components/Navbar.js';
import {getUser} from '../server.js';
import ErrorBanner from '../components/ErrorBanner';

export default class Entry extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: {
        "_id": 0,
        "fullName": "",
        "feed" : 0,
        "picture": 0,
        "location": "",
        "email": "",
        "following": [],
        "calendarEvent":[]
      }
    }
  }

  refresh(){
    getUser("000000000000000000000001", (userObj) => {
      this.setState({user: userObj});
    });
  }

  componentDidMount(){
    this.refresh();
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
             <div className="col-md-12">
               <ErrorBanner />
             </div>
           </div>
        </div>
        <Navbar user={this.state.user} />
        {
          this.props.children
        }
      </div>
    )
  }
}
