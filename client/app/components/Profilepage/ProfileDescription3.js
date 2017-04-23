import React from 'react';

export default class ProfileDescription3 extends React.Component {
  render() {
    return (
      <div className="panel profile-section">
        <div className="panel-heading">
          <h2 className="prof-section-title"><strong>WHAT I LIKE</strong></h2>
        </div>
        <div className="panel-body">
          <FollowingWidget following={this.props.profile.following} />
          <FavoritesWidget favsongs={this.props.profile.fav_songs} favalbums={this.props.profile.fav_albums} />
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
                {this.props.favsongs.map((song) =>
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
                {this.props.favalbums.map((album) =>
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
