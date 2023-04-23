import axios from "axios";
import * as actionTypes from '../constants/productsConstant'


const URL = "https://flipkartserver-3zzj.onrender.com";

export const getProducts = () => async (dispacth) => {
    try {
        const {data} = await axios.get(`${URL}/products`);
        dispacth({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
    } catch (error) {
        dispacth({type:actionTypes.GET_PRODUCTS_FAIL, payload:error});
    }
};


export const getProductDetails = (id) => async(dispacth) => {
    try {
        dispacth({ type:actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const {data} = await axios.get(`${URL}/product/${id}`);
        
        dispacth({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data})
    } catch (error) {
        dispacth({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error});   
    }
}