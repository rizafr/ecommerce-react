"use strict";

// BOOKS REDUCERS
export function booksReducers(state={
  books:
    [{
      _id: 1,
      title: 'Book title',
      description: 'this is the book description',
      price: 33.33
    },{
      _id: 2,
      title: 'Book title two',
      description: 'this is the second book description',
      price: 29.33
    }]
  }, action){
  switch(action.type){

    case "GET_BOOKS":
    return {...state, books:[...state.books]}
    break;

    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {books:[...state.books, ...action.payload]}
    break;

    case "DELETE_BOOK":
    // Create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    // Determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex(
      function(book){
        // return book._id.toString() === action.payload;
        return book._id == action.payload;
      }
    )
    // use slice to remove the book at the specified index
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    // Create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    // Determine at which index in books array is the book to be updated
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book){
        return book._id === action.payload._id;
      }
    )
    // Create a new book object with the new values. We'll use ...spread or concat
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    // Log to show how newBookToUpdate looks like
    console.log("What is the newBookToUpdate ", newBookToUpdate);
    // use slice to remove the book at the specified index, replace with the new object and concatenate with the rest of the items in the array
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;

  }
  return state
}
