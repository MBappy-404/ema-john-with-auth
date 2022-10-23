// import { getStoredCart } from "../utilities/fakedb";

import { getStoredCart } from "../utilities/fakedb";

// export const productsAndCardLoader = async () => {
//      const productsData = await fetch('products.json');
//      const products = await productsData.json();

//      //get cart

//      const savedCart = getStoredCart();
//      const initialCart = [];
//     for(const id in savedCart){
//      console.log('saveCrt', id);

//      const addedProduct = products.find(product => product.id === id);
//      if(addedProduct){
//           const quantity = savedCart[id];
//           addedProduct.quantity = quantity;
//           initialCart.push(addedProduct);
//      }
//     }

//      return {products: products, initialCart: initialCart};
// }


export const productsAndCardLoader = async() =>{

     const productsData = await fetch('products.json');
     const products = await productsData.json();


     const savedCart = getStoredCart();
     const initialCart = [];

     for( const id in savedCart){
          const addedProduct = products.find(product => product.id === id);
          if(addedProduct){
               const quantity = savedCart[id];
               addedProduct.quantity = quantity;
               initialCart.push(addedProduct)
          }
     }

     return {products, initialCart}
}
