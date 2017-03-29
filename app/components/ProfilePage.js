import React from 'react';
import Navbar from './Navbar.js';
import {mockUser} from './Navbar.js';
import Comments from './Comments.js';
import {mockComments} from './Comments.js';
import MusicWidget from './MusicWidget';
import EventWidget from './EventWidget.js';
import {mockEventList} from './EventWidget.js';

const profile = {
  coverPicURL: "img/genericband.jpg",
  name: "Sandra Cheeks",
  picURL: "img/Sandy-Profile.jpg",
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
  instruments: [
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
  ],
  bands: [
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
  ],
  following: ["Spongebob SquarePants","Squidward Tentacles","Patrick Star","AC-DC"],
  fav_songs: [
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
  ],
  fav_albums: [
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
}

export default class ProfilePage extends React.Component {
  render(){
    return (
      <div>
        <Navbar user={mockUser} />
        <div className="container">
          <div className="row">
            <ProfileHeader coverPic={profile.coverPicURL} name={profile.name} pic={profile.picURL} />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="panel profile-part">
                <div className="panel-heading">
                  <h1 className="panel-title">WHO I AM:</h1>
                </div>
                <div className="panel-body">
                  <ProfileIntro phone={profile.phone} email={profile.email} town={profile.location.town} state={profile.location.state} zipcode={profile.location.zipcode} country={profile.location.country} summary={profile.summary} level={profile.level} />
                  <div className="panel info-section">
                    <div className="panel-heading">
                      <h2 className="panel-title">Experience</h2>
                    </div>
                    <div className="panel-body">
                      <ul>
                        <li><InstrumentsWidget instruments={profile.instruments} /></li>
                        <li><BandsWidget bands={profile.bands} /></li>
                        <li><Comments comments={mockComments} /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel profile-part">
                <div className="panel-heading">
                  <h1 className="panel-title">WHAT I DO:</h1>
                </div>
                <div className="panel-body">
                  <ul>
                    <li><MusicWidget /></li>
                    <li><MusicWidget /></li>
                    <li><MusicWidget /></li>
                  </ul>
                  <EventWidget eventList={mockEventList} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel profile-part">
                <div className="panel-heading">
                  <h1 className="panel-title">WHAT I LIKE:</h1>
                </div>
                <div className="panel-body">
                  <FollowingWidget following={profile.following} />
                  <FavMusicWidget fav-songs={profile.fav_songs} fav-albums={profile.fav_albums} />
                </div>
              </div>
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
      <div className="container">
        <div className="row prof-coverpic-row">
          <img className="prof-coverpic" src={this.props.coverPic} />
        </div>
        <div className="row prof-pic-row">
          <img className="prof-coverpic" src={this.props.picURL} />
        </div>
        <div className="row prof-name-row">
          <h1 className="prof-name">{this.props.name}</h1>
        </div>
      </div>
    )
  }
}

class ProfileIntro extends React.Component {
  render() {
    return (
      <div className="panel info-section">
        <div className="panel-heading">
          <h2 className="panel-title">Introduction</h2>
        </div>
        <div className="panel-body">
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Contact Info:</h3>
            </div>
            <div className="panel-body">
              <ul>
                <li>Phone: {this.props.phone}</li>
                <li>Email: {this.props.email}</li>
              </ul>
            </div>
          </div>
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Location:</h3>
            </div>
            <div className="panel-body">
              <ul>
                <li>Town: {this.props.town}</li>
                <li>State: {this.props.state}</li>
                <li>Country: {this.props.country}</li>
                <li>Zipcode: {this.props.zipcode}</li>
              </ul>
            </div>
          </div>
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Summary</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.summary}</p>
            </div>
          </div>
          <p>Level: {this.props.level}</p>
        </div>
      </div>
    )
  }
}

class InstrumentsWidget extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Instruments</h3>
        </div>
        <div className="panel-body">
          <ul className="inst-list">
            {this.props.instruments.map((instrument) =>
              <li className="instrument" key={instrument.id}>{instrument.instrument}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

class BandsWidget extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Bands</h3>
        </div>
        <div className="panel-body">
          <ul className="band-list">
            {this.props.bands.map((band) =>
              <li className="band" key={band.id}>{band.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

class FollowingWidget extends React.Component {
  render() {
    return (
      <div className="panel info-section">
        <div className="panel-heading">
          <h2 className="panel-title">Following</h2>
        </div>
        <div className="panel-body">
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Artists:</h3>
            </div>
            <div className="panel-body">
              <ul className="following-list">
                {this.props.following.map((artist) =>
                  <li className="artist" key={artist.id}>{artist}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class FavoritesWidget extends React.Component {
  render() {
    return (
      <div className="panel info-section">
        <div className="panel-heading">
          <h2 className="panel-title">Favorites</h2>
        </div>
        <div className="panel-body">
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Songs:</h3>
            </div>
            <div className="panel-body">
              <ul className="fav-list">
                {this.props.following.map((song) =>
                  <li className="song" key={song.id}>{song.name}</li>
                )}
              </ul>
            </div>
          </div>
          <div className="panel info-category">
            <div className="panel-heading">
              <h3 className="panel-title">Albums:</h3>
            </div>
            <div className="panel-body">
              <ul className="fav-list">
                {this.props.following.map((album) =>
                  <li className="album" key={album.id}>{album.name}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
