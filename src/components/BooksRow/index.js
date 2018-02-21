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
    const currBooks = this.state.books[this.props.author];
    const allBooksComponents = [];
    const init = (this.props.part * 4) - 4;
    for (let i = init; i < currBooks.length && i < init + 4; i += 1) {
      const element = currBooks[i];
      const currComp = <Book author={this.props.author} title={element.Name} key={element.id} rating={element.rating} />;
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
