import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MainBody.css';
import BooksGroup from '../BooksGroup';
import booksObj from '../../booksobj.js';
import { populateStore } from '../../redux/actions';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('/books', { method: 'get' }).then(response => response.json()).then(this.props.loadBookstoStore);
    // ;
  }
  render() {
    const booksGrpArr = [];
    console.log((this.props.books));
    for (const authorname in this.props.books) {
      if (this.props.books.hasOwnProperty(authorname)) {
        booksGrpArr.push(<BooksGroup author={authorname} key={authorname} />);
      }
    }
    return (
      <div className="main-body" >
        {booksGrpArr}
      </div>);
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

