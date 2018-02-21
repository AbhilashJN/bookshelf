import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import BookImg from '../BookImg';
import BookAuthor from '../BookAuthor';
import BookTitle from '../BookTitle';
import BookRating from '../BookRating';
import FavBtn from '../FavBtn';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="book">

        <BookImg />

        <BookTitle text={this.props.title} />
        <BookRating text={this.props.rating} />
        <BookAuthor text={this.props.author} />
        <FavBtn />

      </div>);
  }
}
Book.defaultProps = {
  title: 'title',
};
Book.propTypes = {
  title: PropTypes.string,
};
export default Book;
