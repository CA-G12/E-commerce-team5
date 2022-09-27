import { useEffect, useState } from 'react';
import CartItem from '../CartItem';
import '../../global_style.css';
import './style.css';

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch('/api/v1/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: 1 }),
    });
  }, []);
  useEffect(() => {
    fetch('/api/v1/cart')
      .then((data) => data.json())
      .then((data) => setCartItem(data));
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
