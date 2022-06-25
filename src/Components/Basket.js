import './basket.css';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';


export default function Basket(props){
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <div>
            <h2 style={{color: "#848181"}}>Cart items</h2>
            {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row1">
            <div> <img className="imgg" src={item.thumb} /></div>
            <div style={{color: "#848181"}}  >{item.product_name}</div>
            
            <div >
              <button onClick={() => onRemove(item)} className="remove">
                <RemoveIcon/>
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                <AddIcon/>
              </button>
            </div>

            <div  >
              {item.qty} x ${item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row1">
              <div style={{color: "#848181"}} >Items Price</div>
              <div style={{color: "#848181"}} >${itemsPrice}</div>
            </div>
            <div className="row1">
              <div style={{color: "#848181"}} >Tax Price</div>
              <div style={{color: "#848181"}} >${taxPrice}</div>
            </div>
            <div className="row1">
              <div style={{color: "#848181"}} >Shipping Price</div>
              <div style={{color: "#848181"}} >
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row1">
              <div style={{color: "#848181"}} >
                <strong>Total Price</strong>
              </div>
              <div style={{color: "#848181"}} >
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr/>
            <div className="row1">
              <Button style={{color: "#848181"}}  onClick={() => alert('Implement Checkout!')}>
                Checkout
              </Button>
            </div>
          </>
        )}
        </div>
    );
}