import React from 'react';
import MainFeedElement from './MainFeedElement.js';

export default class MainFeed extends React.Component {
  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
          <div className="main-feed">
              <h1>Recent Activity</h1>
              <MainFeedElement author="Person 1" authorProfile="#" postedDate="Friday at 10:06 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">Practice is canceled tonight (2/24)!</MainFeedElement>
              <MainFeedElement author="Person 2" authorProfile="#" postedDate="Friday at 10:07 AM" bandName="Band 5" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 3" authorProfile="#" postedDate="Friday at 10:08 AM" bandName="Band 2" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 4" authorProfile="#" postedDate="Friday at 10:09 AM" bandName="Band 3" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 5" authorProfile="#" postedDate="Friday at 10:10 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 6" authorProfile="#" postedDate="Friday at 10:11 AM" bandName="Band 3" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 7" authorProfile="#" postedDate="Friday at 10:12 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
          </div>
      </div>
    )
  }
}
