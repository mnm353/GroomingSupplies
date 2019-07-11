import React from 'react'

export default function cart_item(props) {
    return (
        <div>
            <img src={props.image_url} alt="Product Image"/>
            <h3> {props.name} <sup>{props.price}</sup></h3>
            <button onClick={()=>{props.removeFromCart(props.id)}}>Remove</button>
        </div>
    )
}
