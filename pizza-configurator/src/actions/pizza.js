// src/actions/pizza.js

// Set  the action creator constant SET_PIZZA_BASE
export const SET_PIZZA_BASE = 'SET_PIZZA_BASE'

// Define the action creator setPizzaBase
export function setPizzaBase(pizzaBase) {
  return {
    type: SET_PIZZA_BASE,
    payload: pizzaBase
  }
}

// Set  the action creator constant SET_PIZZA_SAUCE
export const SET_PIZZA_SAUCE = 'SET_PIZZA_SAUCE'

// Define the action creator setPizzaSauce
export function setPizzaSauce(pizzaSauce) {
  return {
    type: SET_PIZZA_SAUCE,
    payload: pizzaSauce
  }
}

// Set  the action creator constant ADD_PIZZA_TOPPING
export const ADD_PIZZA_TOPPING = 'ADD_PIZZA_TOPPING'

// Define the action creator addPizzaTopping
export function addPizzaTopping(pizzaTopping) {
  return {
    type: ADD_PIZZA_TOPPING,
    payload: pizzaTopping
  }
}

// Set  the action creator constant REMOVE_PIZZA_TOPPING
export const REMOVE_PIZZA_TOPPING = 'REMOVE_PIZZA_TOPPING'

// Define the action creator removePizzaTopping
export function removePizzaTopping(pizzaTopping) {
  return {
    type: REMOVE_PIZZA_TOPPING,
    payload: pizzaTopping
  }
}

// Set  the action creator constant SET_PIZZA_DELIVERY
export const SET_PIZZA_DELIVERY = 'SET_PIZZA_DELIVERY'

// Define the action creator setPizzaDelivery
export function setPizzaDelivery(pizzaDelivery) {
  return {
    type: SET_PIZZA_DELIVERY,
    payload: pizzaDelivery
  }
}
