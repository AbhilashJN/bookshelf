import React from 'react';
import PropTypes from 'prop-types';
import './booksGroup.css';
import AuthorRow from '../AuthorRow';
import BooksRow from '../BooksRow';
import booksObj from '../../booksobj.js';

class BooksGroup extends React.Component {
  render() {
    const noOfRows = Math.ceil(booksObj[this.props.author].length / 4);
    const booksRowsAll = [];
    for (let i = 0; i < noOfRows; i += 1) {
      booksRowsAll.push(<BooksRow author={this.props.author} part={i + 1} />);
    }
    return (
      <div className="books-group">
        <AuthorRow author={this.props.author} />
        {booksRowsAll}
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
