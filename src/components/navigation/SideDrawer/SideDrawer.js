import React from 'react';

import '../../../style/components/SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <h1>Logo</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/noteApp">Notes</a>
        </li>
        <li>
          <a href="/">Login With Google</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
