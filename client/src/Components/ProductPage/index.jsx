/* eslint-disable react/prop-types */
import './style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const [user] = useOutletContext();
  const [inCart, setInCart] = useState(!user.loggedIn ? false : null);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  // const product = {
  //   category_name: 'Running shoes',
  //   categoryid: 2,
  //   id: 3,
  //   image:
  //     'https://o.remove.bg/downloads/bc1f5ad6-bb26-4e98-8df8-8cfbe0874ea8/png-transparent-nike-free-nike-air-max-sneakers-shoe-red-shoes-thumbnail-removebg-preview.png',
  //   inCart: false,
  //   name: 'Running Shoes',
  //   price: '20',
  // };
  useEffect(() => {
    console.log('hiiiiiiiiiiii', id);

    const p1 = fetch(`/api/v1/products/${id}`).then((res) => res.json());
    p1.then((data) => {
      setProduct(data[0]);
      return data;
    }).then(() => console.log('data', product));

    if (!user.loggedIn) {
      console.log('user isnnot logged');
      setInCart(false);
    } else {
      console.log('user is logged');

      fetch(`/api/v1/cart`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            if (+element.id === +id) {
              setInCart(true);
            }
          });
        });
      // Promise.all([p1, p2])
      //   .then((values) => {
      //     console.log(values);
      //     values[1].forEach((element) => {
      //       console.log(id, element.id);
      //       if (element.id === id) {
      //         setInCart(true);
      //         console.log('in inside if', inCart);
      //       }
      //     });
      //   })
      //   .then(() => console.log('inCart', inCart));
    }
  }, []);

  // if the user in not logged in then inCart is always false and when clicking in add To cart
  // he will be navigated to the login page.

  // if the user if logged in then i will check if the product is in his cart
  // if it is I will set the inCart to be true else it would be false.

  const addToCart = () => {
    if (user.loggedIn) {
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
    } else {
      navigate('/login');
    }
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
  if (!product) return <div>Loading...</div>;
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
