import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MainBody.css';
import BooksGroup from '../BooksGroup';
import booksObj from '../../booksobj.js';
import { populateStore } from '../../redux/actions';
import Refresh from '../Refresh';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    fetch('/getbooks', { method: 'get' }).then(response => response.json()).then((resJson) => {
      if (Object.keys(resJson).length === 0) {

      } else {
        this.props.loadBookstoStore(resJson);
        this.setState({ loaded: true });
      }
    });
  }

  loadBooks=() => {
    fetch('/books', { method: 'post' })
      .then(() => {
        fetch('/getbooks')
          .then(response => response.json())
          .then((groupedBooks) => { this.props.loadBookstoStore(groupedBooks); this.setState({ loaded: true }); });
      });
  }


  render() {
    if (this.state.loaded === true) {
      const booksGrpArr = [];
      console.log((this.props.books));
      for (const authorname in this.props.books) {
        if (this.props.books.hasOwnProperty(authorname)) {
          booksGrpArr.push(<BooksGroup author={authorname} booksDetails={this.props.books[authorname]} key={authorname} />);
        }
      }
      return (
        <div className="main-body" >
          {booksGrpArr}
        </div>);
    }

    return (
      <Refresh loadBooks={this.loadBooks} />
    );
  }
}


const mapStatetoProps = (state) => {
  console.log('state:', state);
  return {

    books: state.populateStore.books,
  };
};

const mapDispatchToProps = dispatch => ({
  loadBookstoStore: (booksObject) => { dispatch(populateStore(booksObject)); },
});

MainBody.defaultProps = {
};
MainBody.propTypes = {
};


export default connect(mapStatetoProps, mapDispatchToProps)(MainBody);

