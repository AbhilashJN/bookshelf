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
  LikeHandler=()=>{
    console.log('t:::::::',this.state)
    const reqAction = (this.state.status==='liked')?'/dislike':'/like'; 
    const config = {
      method:'post',
      body:JSON.stringify({bookid:this.props.bookid})
    }
    fetch(reqAction,config).then((response)=>{return response.text()}).then((respText)=>{
     // console.log("ss:::::::",respText);
      this.setState({status:respText})
    })
  }
  render() {
    return (
      <div className="book">
        <BookImg />
        <FavBtn status={this.state.status} clickHandler={this.LikeHandler} />
        <BookTitle text={this.props.title} />
        <BookRating text={this.props.rating} />
        <BookAuthor text={this.props.author} />
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
