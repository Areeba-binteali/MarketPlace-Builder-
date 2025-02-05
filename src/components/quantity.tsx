"use client"

import { useEffect, useState } from "react"



export default function Quantity(){
    const [quantity, setQuantity] = useState(1);
    
    const increase = () => {
        setQuantity(quantity + 1);
        
    }
    const decraese = () => {
       if(quantity > 1){
        setQuantity(quantity - 1);
       }
    }
    useEffect(()=>{
        const button = document.querySelector('.snipcart-add-item') as HTMLElement;
        button.setAttribute('data-item-quantity', `${quantity}`);
    })
    return(
        <p className="quantity"><span onClick={decraese}>-</span><span className="quantity-num">{quantity}</span><span onClick={increase}>+</span></p>
    )

}
