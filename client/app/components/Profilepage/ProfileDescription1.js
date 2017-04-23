import React from 'react';
import ProfileIntro from './ProfileIntro.js';
import ExperienceWidget from './ExperienceWidget.js';

export default class ProfileDescription1 extends React.Component {
  render() {
    return (
      <div className="panel profile-section">
        <div className="panel-heading">
          <h2 className="prof-section-title"><strong>WHO I AM</strong></h2>
        </div>
        <div className="panel-body">
          <ProfileIntro profile={this.props.profile} />
          <ExperienceWidget profile={this.props.profile} />
        </div>
      </div>
    )
  }
}
