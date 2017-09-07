"use strict";

// CART REDUCERS
export function cartReducers(state={cart:[]}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {cart:[...state, ...action.payload]}
    break;

    case "UPDATE_CART":
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.cart]
      // Determine at which index in books array is the book to be updated
      const indexToUpdate = currentBookToUpdate.findIndex(
        function(book){
          return book._id === action._id;
        }
      )
      // Create a new book object with the new values. We'll use ...spread or concat
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
      }
      // use slice to remove the book at the specified index, replace with the new object and concatenate with the rest of the items in the array
      let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
      ...currentBookToUpdate.slice(indexToUpdate + 1)]
      return {...state,
        cart: cartUpdate
      }
    break;

    case "DELETE_CART_ITEM":
      return {cart:[...state, ...action.payload]}
    break;
  }
  return state
}
