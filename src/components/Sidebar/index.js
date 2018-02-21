import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import Icon from '../Icon';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
      Bs
        <div>
          <Icon inconname="refresh" />
          <Icon inconname="settings" />
        </div>
      </div>);
  }
}
Sidebar.defaultProps = {
};
Sidebar.propTypes = {
};
export default Sidebar;
