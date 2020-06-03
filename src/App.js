import './style/index.scss';
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NoteApp from './pages/NoteApp';
import HomePage from './pages/HomePage';
import Toolbar from './components/navigation/Toolbar/Toolbar';
import SideDrawer from './components/navigation/SideDrawer/SideDrawer';
import Backdrop from './components/navigation/Backdrop/Backdrop';
const history = createBrowserHistory();

class App extends Component {
  state = { sideDrawerOpen: false };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Router history={history}>
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/noteApp" component={NoteApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
