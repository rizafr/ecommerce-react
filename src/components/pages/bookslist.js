"use strict";
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';

class BooksList extends React.Component{
  componentDidMount(){
    // Dispatch an action
    this.props.getBooks();
  }
  render(){
    const booksList = this.props.books.map(function(booksArr){
      return(
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <p>{booksArr.description} - <strong>{booksArr.price}</strong></p>
        </div>
      )
    })
    return(
      <div>
        <h1>Book Store</h1>
        {booksList}
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}
// subscribing to the store
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
