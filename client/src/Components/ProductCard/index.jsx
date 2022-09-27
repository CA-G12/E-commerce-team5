/* eslint-disable react/prop-types */
import '../../global_style.css';
import './style.css';

import { AiOutlineShoppingCart, AiFillQuestionCircle } from 'react-icons/ai';
import { useEffect } from 'react';

export default function ProductCart(props) {
  const { productData } = props;
  const iconStyle = {
    color: '#6fa5a3',
    fontSize: '2rem',
  };
  useEffect(() => {
    fetch('/api/v1/cart/1')
      .then((res) => res.json().rows)
      .then(console.log);
  }, []);
  // console.log(productData);
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
        <div className="cart-icon">
          <AiOutlineShoppingCart style={iconStyle} />
        </div>
        <div className="name-price">
          <h3 className="name">{productData.name}</h3>
          <h3 className="price">{productData.price}$</h3>
        </div>
        <div className="cart-icon">
          <AiFillQuestionCircle style={iconStyle} />
        </div>
      </div>
    </div>
  );
}
