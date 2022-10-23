import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderData from '../OrderItem/OrderData';

const Order = () => {
     const { products, initialCart } = useLoaderData();
     const [cart, setCart] = useState(initialCart);

     const removeItem = (id) => {
          const remaining = cart.filter(product => product.id !== id);
          setCart(remaining)

          removeFromDb(id);
          
     }

     const clearCart = () =>{
          setCart([]);
          deleteShoppingCart();
      }
     return (
          <div className='shop-container'>

               <div className="oder-container">

                    {
                         cart.map(product => <OrderData
                              key={product.id}
                              product={product}
                              removeItem={removeItem}
                         ></OrderData>)
                    }
                    {
                         cart.length === 0 && <h2>Order Not Available..Please Select Order</h2>
                    }

               </div>

               <div className="cart-container">

                    <Cart clearCart={clearCart} cart={cart}>

                         <Link to="/shipping">
                              <button>Proceed Shipping</button>
                         </Link>
                    </Cart>

               </div>

          </div>
     );
};

export default Order;