/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import '../../global_style.css';
import './style.css';

import { BsCartPlus, BsCartFill, BsQuestionCircleFill } from 'react-icons/bs';
import { useState } from 'react';

/// products user => token => id // cart // products => {incart: true}
export default function ProductCart(props) {
  const { productData } = props;
  const [inCart, setInCart] = useState(productData.inCart);
  const iconStyle = {
    color: '#6fa5a3',
    fontSize: '2rem',
  };
  // useEffect(() => {
  //   if (userId) {
  //     fetch(`/api/v1/cart/${userId}`)
  //       .then((res) => res.json())
  //       .then((res) => setCart(res.map((e) => e.productid)));
  //   }
  // }, [userId]);
  const addToCart = () => {
    console.log('in add');
    fetch(`/api/v1/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productData.id,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(() => setInCart(true));
  };
  const removeFromCart = () => {
    console.log('in del');
    fetch(`/api/v1/cart/${productData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(console.log)
      .then(() => {
        // const filtered = cart.filter((e) => {
        //   console.log(e.id, productData.id, e.id !== productData.id, e);
        //   return e !== productData.id;
        // });
        // setCart(filtered);
        setInCart(false);
      })
      .then(() => console.log(inCart));
  };

  return (
    <div className="card-container">
      <img
        className="product-image"
        src={productData.image}
        alt={productData.name}
      />
      <div className="card-category">
        <p>Headphones</p>
      </div>
      <div className="row">
        {inCart && (
          <div className="cart-icon">
            <BsCartFill style={iconStyle} onClick={() => removeFromCart()} />
          </div>
        )}

        {!inCart && (
          <div className="cart-icon">
            <BsCartPlus style={iconStyle} onClick={() => addToCart()} />
          </div>
        )}
        <div className="name-price">
          <h3 className="name">{productData.name}</h3>
          <h3 className="price">{productData.price}$</h3>
        </div>
        <div className="cart-icon">
          <BsQuestionCircleFill style={iconStyle} />
        </div>
      </div>
    </div>
  );
}
