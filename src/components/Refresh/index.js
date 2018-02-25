import React from 'react';
import PropTypes from 'prop-types';
import './refresh.css';

class Refresh extends React.Component {
  render() {
    return (
      <div className="refresh-page">
        <p className="refresh-page-text">Oops! No Books Found!</p>
        <p className="refresh-page-text">Import Them Now?</p>
        <button className="btn-refresh-large" onClick={() => { this.props.loadBooks(); }} />
      </div>
    );
  }
}
Refresh.defaultProps = {
};
Refresh.propTypes = {
};
export default Refresh;
