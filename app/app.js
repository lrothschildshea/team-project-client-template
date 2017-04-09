import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './components/ProfilePage.js';
import EventPage from './components/EventPage.js';
import BandPage from './components/BandPage.js';
import Homepage from './components/Homepage.js';
import Chatpage from './components/Chat.js';
import Search from './components/Search.js';
import SearchResults from './components/SearchResults.js';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Homepage} />
        <Route path="/band/:id" component={BandPage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/search" component={Search} />
        <Route path="/chat/:id" component={Chatpage} />
        <Route path="/search/result" component={SearchResults} />
        <Route path="/calendar" component={EventPage} />
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
