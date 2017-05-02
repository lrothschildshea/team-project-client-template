import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './components/Profilepage/ProfilePage.js';
import EventPage from './components/EventPage.js';
import BandPage from './components/BandPage.js';
import Homepage from './pages/Homepage.js';
import Chatpage from './components/Chat/Chat.js';
import Search from './components/Search.js';
import SearchResults from './components/SearchResults.js';
import Entry from './pages/Entry.js';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Entry}>
          <IndexRoute component={() => (<Homepage userId="000000000000000000000001"/>)} />
          <Route path="band/:id" component={BandPage} />
          <Route path="profile/:id" component={ProfilePage} />
          <Route path="search" component={Search} />
          <Route path="chat/:id" component={Chatpage} />
          <Route path="/search/result" component={SearchResults} />
          <Route path="calendar" component={EventPage} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
