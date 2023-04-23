import axios from 'axios';
import * as actionType from '../constants/cartConstants'

const URL = "https://flipkartserver-3zzj.onrender.com";

export const addToCart = (id, quantity) => async(dispacth) => {
  try {
    const {data} =await axios.get(`${URL}/product/${id}`)

    dispacth({type:actionType.ADD_TO_CART, payload:{...data, quantity}})
  } catch (error) {
    dispacth({type:actionType.ADD_TO_CART_ERROR, payload:error.message})
  }
}

export const removeFromCart = (id) => (dispacth) => {
  dispacth({type:actionType.REMOVE_FROM_CART, payload:id});
}