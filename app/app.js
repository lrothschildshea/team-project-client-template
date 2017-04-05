import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './components/ProfilePage.js';
import EventPage from './components/EventPage.js';
import BandPage from './components/BandPage.js';
import Homepage from './components/Homepage.js';
import Chatpage from './components/Chat.js';
import Search from './components/Search.js';
import SearchResults from './components/SearchResults.js';

if(document.getElementById('Homepage') !== null){
  ReactDOM.render(
    <Homepage />,
    document.getElementById('Homepage')
  );
} else if (document.getElementById('profilepage') !== null) {
  ReactDOM.render(
    <ProfilePage />,
    document.getElementById('profilepage')
  );
} else if (document.getElementById('bandpage') !== null) {
  ReactDOM.render(
    <BandPage />,
    document.getElementById('bandpage')
  );
} else if (document.getElementById('eventpage') !== null) {
  ReactDOM.render(
    <EventPage />,
    document.getElementById('eventpage')
  );
} else if(document.getElementById('chatpage') !== null) {
  ReactDOM.render(
    <Chatpage />,
    document.getElementById('chatpage')
  );
} else if(document.getElementById('search') !== null) {
  ReactDOM.render(
    <Search />,
    document.getElementById('search')
  );
} else if(document.getElementById('searchresults') !== null) {
  ReactDOM.render(
    <SearchResults />,
    document.getElementById('searchresults')
  );
}
