import React from 'react';
import PropTypes from 'prop-types';
import './authorRow.css';

class AuthorRow extends React.Component {
  render() {
    return (
      <div className="author-row">
        {this.props.author}
      </div>);
  }
}
AuthorRow.defaultProps = {
  author: 'author',
};
AuthorRow.propTypes = {
  author: PropTypes.string,
};
export default AuthorRow;
