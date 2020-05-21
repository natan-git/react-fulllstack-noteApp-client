import React, { Component } from 'react';
import { fethUser } from '../../../actions/userAction';
import { connect } from 'react-redux';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class toolbar extends Component {
  state = {};

  componentDidMount() {
    // this.props.fethUser();
    // console.log('this.props', this.props);
  }

  renderContent() {
    return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/noteApp">Notes</a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <a href="/">NOTES</a>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">{this.renderContent()}</div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {
  fethUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);
