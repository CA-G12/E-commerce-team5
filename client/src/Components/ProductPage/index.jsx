/* eslint-disable react/prop-types */
import './style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function ProductPage(props) {
  const { product } = props;
  const [inCart, setInCart] = useState(product.inCart);
  console.log(product);
  const addToCart = () => {
    fetch(`/api/v1/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: product.id,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(() => {
        setInCart(true);
      });
  };
  const removeFromCart = () => {
    fetch(`/api/v1/cart/${product.id}`, {
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
    <section className="product-popup">
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
        <div className="product__info">
          <AiFillCloseCircle className=" close-icon" />
          <div className="title">
            <h1>{product.name} </h1>
            <span>CODE: {product.id} </span>
          </div>
          <div className="price">
            $ <span>{product.price} </span>
          </div>
          <div className="category">{product.category_name} </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nulla, est error mollitia earum veritatis. Rem id, velit
              consectetur ex impedit commodi corrupti nesciunt aperiam porro
              laboriosam, quisquam dolores sapiente lore
            </p>
          </div>

          {inCart ? (
            <button className="buy--btn" type="button" onClick={removeFromCart}>
              Remove from cart
            </button>
          ) : (
            <button className="buy--btn" type="button" onClick={addToCart}>
              Add to cart
            </button>
          )}
        </div>
      </section>
    </section>
  );
}
