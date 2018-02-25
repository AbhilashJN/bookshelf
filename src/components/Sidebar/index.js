import React from 'react';
import './sidebar.css';
import Icon from '../Icon';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
      Bs
        </div>
        <div className="sidebar-buttons">
          <Icon iconName="refresh" />
          <Icon iconName="settings" />
        </div>
      </div>);
  }
}
Sidebar.defaultProps = {
};
Sidebar.propTypes = {
};
export default Sidebar;
