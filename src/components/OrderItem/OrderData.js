import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css'

const OrderData = ({  product,removeItem }) => {

     const {id,name, price, quantity,shipping, img } = product;
     return (
          <div className='order-item'>

               <div>
                    <img src={img} alt="" />
               </div>

               <div className="item-details-container">

                   <div className='item-details'>
                   <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                   </div>

                    <div className="delete-container">
                         <button onClick={() => removeItem(id)}>
                              <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                         </button>
                    </div>

               </div>



          </div>
     );
};

export default OrderData;