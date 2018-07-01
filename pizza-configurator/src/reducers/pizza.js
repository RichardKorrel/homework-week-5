// src/reducers/pizza.js

// Import the action creator constants SET_PIZZA_base ...
import { SET_PIZZA_BASE, SET_PIZZA_SAUCE,
         ADD_PIZZA_TOPPING, REMOVE_PIZZA_TOPPING,
         SET_PIZZA_DELIVERY} from '../actions/pizza'

// Set the initial state variables for the pizza selections
const initialState =
  {
    base: null,
    sauce: null,
    toppings: [],
    delivery: null,
  }

// Define the state tranformation actions
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PIZZA_BASE:{
      // Set the pizza base to the one the user selected
      return {
        ...state,
        base: action.payload
      }
    }
    case SET_PIZZA_SAUCE:{
      // Set the pizza sauce to the one the user selected
      return {
        ...state,
        sauce: action.payload,
      }
    }
    case ADD_PIZZA_TOPPING:{
      // Add the pizza topping the user selected
      let newStateTopping = state.toppings
      // But only if the payload is filled, no more than 3 toppings
      // are chosen and the topping was not chosen yet
      if (action.payload && state.toppings.length <3 &&
          state.toppings.filter(topping => {
            if (topping === action.payload) return topping}).length === 0) {
        newStateTopping = state.toppings.concat(action.payload)
      }
      return {
        ...state,
        toppings: newStateTopping,
      }
    }
    case REMOVE_PIZZA_TOPPING:{
      // Remove the pizza topping the user wants to remove
      return {
        ...state,
        toppings: state.toppings.filter(topping => {
          if (topping !== action.payload) return topping
        })
      }
    }
    case SET_PIZZA_DELIVERY:{
      // Set the pizza delivery to the one the user selected
      return {
        ...state,
        delivery: action.payload,
      }
    }
    default:
      // Return the initial/default state
      return state
    }
}

// const store = redux.createStore(reducer)
// console.log('Initial state of the store', store.getState())

export default reducer
