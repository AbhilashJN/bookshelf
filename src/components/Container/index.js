import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import TitleBar from '../TitleBar';
import MainBody from '../MainBody';
import Sidebar from '../Sidebar';

class Container extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="container-column">
          <TitleBar />
          <MainBody />
        </div>
      </div>
    );
  }
}


Container.defaultProps = {
};
Container.propTypes = {
};
export default Container;
