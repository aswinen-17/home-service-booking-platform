import React, { useContext, } from 'react'
import './ServiceItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ServiceItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='service-item'>
        <div className="service-item-img-container">
            <img className='service-item-image' src={url+"/images/"+image} alt=""/>
              {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                    :<div className='service-item-counter'>
                      <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                      <p>{cartItems[id]}</p>
                      <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
              }

        </div>
      <div className="service-item-info">
        <div className="service-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts}  alt="" />
        </div>
        <p className="service-item-desc">{description}</p>
        <p className="service-item-price">₹{price}</p>
      </div>
    </div>
  )
}

export default ServiceItem
