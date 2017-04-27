import React from 'react';
import ProfileDescription1 from './ProfileDescription1.js';
import ProfileDescription2 from './ProfileDescription2.js';
import ProfileDescription3 from './ProfileDescription3.js';
import {getUser} from '../../server.js';

const mockInstruments = [
  {
    id: 1,
    instrument: "Trombone",
    styles: ["Marching Band", "European Classical"]
  },
  {
    id: 2,
    instrument: "Trumpet",
    styles: ["New Orleans Jazz"]
  },
  {
    id: 3,
    instrument: "Drum Set",
    styles: ["Hard Rock", "Bebop"]
  }
]

const mockBands = [
  {
    id: 1,
    name: "Squidward's Soothing Sounds",
    role: "Trombonist"
  },
  {
    id: 2,
    name: "The Krabby Patties",
    role: "Drummer"
  }
]

const mockFavSongs = [
  {
    id: 1,
    name: "Stars and Stripes Forever",
    artist: "John Philip Sousa"
  },
  {
    id: 2,
    name: "Baba O'Riley",
    artist: "The Who"
  }
]

const mockFavAlbums = [
  {
    id: 1,
    name: "Dark Side of the Moon",
    artist: "Pink Floyd"
  },
  {
    id: 2,
    name: "Thriller",
    artist: "Michael Jackson"
  }
]

const profile = {
  coverPic: {
    backgroundImage: "url(img/genericband.jpg)"
  },
  name: "Sandra Cheeks",
  picURL: "img/Sandy-profile.jpg",
  phone:  "111-111-1111",
  email: "sandycandy123@gmail.com",
  location: {
    town: "Bikini Bottom",
    state: "Mariana Trench",
    zipcode: "11111",
    country: "Pacific Ocean"
  },
  summary: "I don't play nice >:(",
  level: "Rookie",
  instruments: mockInstruments,
  bands: mockBands,
  following: ["Spongebob SquarePants","Squidward Tentacles","Patrick Star","AC-DC"],
  fav_songs: mockFavSongs,
  fav_albums: mockFavAlbums
}

export default class ProfilePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user : {
        _id : 0
      }
    }
  }

  refresh(){
    getUser(this.props.params.id, (userObj) => {
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
          {(typeof this.state.user !== "undefined") ? <ProfileHeader coverPic={profile.coverPic} name={this.state.user.fullName} pic={this.state.user.profilePicture} /> : null}
          <div className="row">
            <div className="col-md-4">
              <ProfileDescription1 profile={profile}/>
            </div>
            <div className="col-md-4">
              <ProfileDescription2 profile={profile}/>
            </div>
            <div className="col-md-4">
              <ProfileDescription3 profile={profile}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class ProfileHeader extends React.Component {
  render() {
    return (
      <div className="row prof-header" style={this.props.coverPic}>
        <div className="prof-spacer">
        </div>
        <div className="prof-id">
          <img src={this.props.pic} width="150" height="150"/>
          <h1>{this.props.name}</h1>
        </div>
      </div>
    )
  }
}
