"use strict";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(function(){
//   console.log('current state is: ', store.getState());
//   // console.log('current price is: ', store.getState()[1].price);
// })

import BooksList from './components/pages/booksList';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
)

// Step 3 create and dispatch ACTIONS
// store.dispatch(postBooks(
//   [{
//     id: 1,
//     title: 'Book title',
//     description: 'this is the book description',
//     price: 33.33
//   },{
//     id: 2,
//     title: 'Book title two',
//     description: 'this is the second book description',
//     price: 29.33
//   }]
// ))

// DELETE a book
// store.dispatch(deleteBooks(
//   {id: 1}
// ))

// UDPATE a book
// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Book Title, Again'
//   }
// ))

// ADD to cart
// store.dispatch(addToCart([{id: 1}]))
