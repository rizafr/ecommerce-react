"use strict";
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

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
        <Button bsStyle='primary'>Buy Now</Button>
        </div>
      )
    })
    return(
      <Grid>
        <Row style={{marginTop:'15px'}}>
          <Col xs={12}>
            {booksList}
          </Col>
        </Row>
      </Grid>
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
