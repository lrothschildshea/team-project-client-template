import React from 'react';
import Navbar from '../components/Navbar.js';
//import {mockUser} from '../components/Navbar.js';
import {getUser} from '../server.js';

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
    getUser("1", (userObj) => {
      this.setState({user: userObj});
    });
  }

  componentDidMount(){
    this.refresh();
  }

  render(){
    return (
      <div>
        <Navbar user={this.state.user} />
        {
          this.props.children
        }
      </div>
    )
  }
}
