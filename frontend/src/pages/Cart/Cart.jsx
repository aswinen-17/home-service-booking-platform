import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,service_list,removeFromCart, getTotalCartAmount, url} = useContext(StoreContext); 

    const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Service</p>
          <p>Name</p>
          <p>Rate</p>
          <p>Bookings</p>
          <p>Total</p>
          <p>Remove</p>
          
        </div>
        <br />
        <hr />
        {service_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return (
              <div>
                   <div className='cart-items-title cart-items-item'>
                <img src={url+ "/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
             
            )
          }
        })}
        </div> 
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Service charge</p>
                <p>₹{getTotalCartAmount()===0?0:100}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+100}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have a promo code, Enter it here</p>
              <div className='cart-promocode-input'>
                  <input type="text" placeholder='promocode' />
                  <button>Submit</button>
              </div>
            </div>
          </div>
          </div>  
    </div>
  )
}

export default Cart
