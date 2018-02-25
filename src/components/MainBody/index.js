import React from 'react';
import './MainBody.css';
import Refresh from '../Refresh';
import BooksGroup from '../BooksGroup';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    fetch('/getbooks', { method: 'get' }).then(response => response.json()).then((resJson) => {
      if (Object.keys(resJson).length === 0) {
        //
      } else {
        // this.props.loadBookstoStore(resJson);
        this.setState({ loaded: true, books: resJson });
      }
    });
  }

  loadBooks=() => {
    // eslint-disable-next-line
    fetch('/books', { method: 'post' })
      .then(() => {
        // eslint-disable-next-line
        fetch('/getbooks')
          .then(response => response.json())
          .then((groupedBooks) => { this.setState({ loaded: true, books: groupedBooks }); });
      });
  }


  render() {
    if (this.state.loaded === true) {
      const booksGrpArr = [];
      const authorList = Object.keys(this.state.books);
      authorList.forEach((authorname) => {
        booksGrpArr.push(<BooksGroup
          author={authorname}
          booksDetails={this.state.books[authorname]}
          key={authorname}
        />);
      });
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


MainBody.defaultProps = {
};
MainBody.propTypes = {
};


export default MainBody;

