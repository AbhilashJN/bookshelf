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
    this.state = {
      status: this.props.status,
    };
  }
  LikeHandler=() => {
    const reqAction = (this.state.status === 'liked') ? '/dislike' : '/like';
    const config = {
      method: 'post',
      body: JSON.stringify({ bookid: this.props.bookid }),
    };
    // eslint-disable-next-line
    fetch(reqAction, config).then(response => response.text()).then((respText) => {
      // eslint-disable-next-line
      console.log('database status:::::::', respText);
      this.setState({ status: respText });
    });
  }
  render() {
    return (
      <div className="book">
        <BookImg imgSrc="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
        <FavBtn status={this.state.status} clickHandler={this.LikeHandler} />
        <BookTitle text={this.props.title} />
        <BookRating text={this.props.rating} />
        <BookAuthor text={this.props.author} />
      </div>);
  }
}
Book.defaultProps = {
  title: 'title',
  author: 'author',
  rating: 0.0,
  bookid: 0,
  status: 'notliked',
};
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  bookid: PropTypes.number,
  status: PropTypes.string,
};
export default Book;
