import React from 'react'
import "./style/Offers.css";

const Offer = ({ title, btn }) => {
    return (
        <div className='Offer' >

            <div class="title">
                <p >{title} </p>
                <button> {btn}</button>
            </div>

        </div>
    )
}

export default Offer;