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
  const addToCart = () => {
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
    fetch(`/api/v1/cart/${productData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(console.log)
      .then(() => {
        setInCart(false);
      });
  };

  return (
    <div className="card-container">
      <img
        className="product-image"
        src={productData.image}
        alt={productData.name}
      />
      <div className="card-category">
        <p>{productData.category_name}</p>
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
