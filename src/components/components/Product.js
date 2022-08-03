import React from 'react'
import "../style/Product.css"
import {
    BrowserRouter,
    Link

} from "react-router-dom";

const product = ({ name, description, image, price, p_link }) => {
    return (

        <div class="card bg-white m-2 product" >
            {/* <a href={p_link}> */}
            < img src={image} class="card-img-top image" alt="Error" />
            <div class="card-body">
                <h5 class="card-title border-bottom p-2 mb-1">{name}</h5>
                <p class="card-subtitle border-bottom p-2 mb-1 text-muted ">{description}</p>
                <p class="card-subtitle text-muted border-bottom p-2 mb-1">Staring from Rs.{price} </p>
                <a href={p_link} class="btn btn-primary">Customise and Order</a>
            </div>
            {/* </a> */}
        </div >


    )
}

export default product