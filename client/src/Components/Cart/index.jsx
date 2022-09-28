import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem';
import '../../global_style.css';
import './style.css';

// const postCart = () =>
//   fetch('/api/v1/cart', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ productId: 1 }),
//   });

const getCart = () => fetch('/api/v1/cart').then((data) => data.json());

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useOutletContext();

  const navigate = useNavigate();
  // useEffect(() => {
  //   postCart();
  // }, []);

  useEffect(() => {
    if (user.loggedIn) {
      getCart().then((data) => {
        setCartItem(data);
      });
    } else {
      navigate('/');
    }
  }, []);
  return (
    <main className="wrapper">
      <section className="content">
        {cartItem.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </section>
    </main>
  );
}

export default Cart;
