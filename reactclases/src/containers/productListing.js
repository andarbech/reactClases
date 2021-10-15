import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from "../redux/actions/productActions"
import ProductComponent from "./productComponent";



const ProductListing = () => {
    const product = useSelector((state) => state)
    const dispatch=useDispatch()
    const fechtProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch ((error)=> {
            console.log("error", error);
        })
        dispatch(setProducts( response.data));
    }

    useEffect(()=>{
        fechtProducts()
    },[])
console.log("products: ", product)
    return (
        <div className="ui container grid">
            <ProductComponent />
        </div>
    )
}
export default ProductListing