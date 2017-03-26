import React from 'react';
import ReactDOM from 'react-dom';
import EventPage from './components/EventPage';
import BandPage from './components/BandPage.js';
import Homepage from './components/Homepage.js';
import Chatpage from './components/Chat.js';

if(document.getElementById('Homepage') !== null){
  ReactDOM.render(
    <Homepage />,
    document.getElementById('Homepage')
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
}
