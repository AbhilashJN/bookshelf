import React from 'react';
import PropTypes from 'prop-types';
import './booksGroup.css';
import AuthorRow from '../AuthorRow';
import BooksRow from '../BooksRow';
import booksObj from '../../booksobj.js';

class BooksGroup extends React.Component {
  render() {
    console.log('p::::::::::', this.props);
    return (
      <div className="books-group">
        <AuthorRow author={this.props.author} />
        <BooksRow author={this.props.author} booksDetails={this.props.booksDetails} />
      </div>
    );
  }
}
BooksGroup.defaultProps = {
  author: 'author',
};
BooksGroup.propTypes = {
  author: PropTypes.string,
};
export default BooksGroup;
