import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import BandPage from './components/BandPage.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('bandpage') !== null) {
  ReactDOM.render(
    <BandPage />,
    document.getElementById('bandpage')
  );
}
