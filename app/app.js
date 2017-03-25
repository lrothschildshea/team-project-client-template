import React from 'react';
import ReactDOM from 'react-dom';
import EventPage from './components/EventPage';
import BandPage from './components/BandPage.js';

if (document.getElementById('bandpage') !== null) {
  ReactDOM.render(
    <BandPage />,
    document.getElementById('bandpage')
  );
}
ReactDOM.render(
  <EventPage />,
  document.getElementById('eventpage')
);
