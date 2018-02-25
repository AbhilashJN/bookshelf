import React from 'react';
import PropTypes from 'prop-types';
import './bookImg.css';

class BookImg extends React.Component {
  render() {
    return (
      <div className="book-img-container" >
        <img alt="book-img" className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
      </div>);
  }
}
BookImg.defaultProps = {
};
BookImg.propTypes = {
};
export default BookImg;
