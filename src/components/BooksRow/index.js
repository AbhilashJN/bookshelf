import React from 'react';
import PropTypes from 'prop-types';
import './booksRow.css';
import Book from '../Book';
import booksObj from '../../booksobj.js';

class BooksRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksObj,
    };
  }

  render() {
    const currBooks = this.props.booksDetails;

    const allBooksComponents = [];
    for (let i = 0; i < currBooks.length; i += 1) {
      const element = currBooks[i];
      console.log('r::::::::::::::', element);
      const currComp = <Book key={element.id} author={element.Author} title={element.Name} bookid={element.id} rating={element.rating} status={element.status} />;
      allBooksComponents.push(currComp);
      console.log(allBooksComponents);
    }
    return (
      <div className="books-row">
        {allBooksComponents}
      </div>);
  }
}
BooksRow.defaultProps = {
};
BooksRow.propTypes = {
};
export default BooksRow;
