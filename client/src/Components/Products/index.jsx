/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ProductCart from '../ProductCard';

// eslint-disable-next-line react/prop-types
export default function Products({ userData }) {
  const [products, setProducts] = useState(null);
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    const p1 = fetch('/api/v1/products').then((res) => res.json());
    const p2 = user.loggedIn && fetch(`/api/v1/cart`).then((res) => res.json());
    Promise.all([p1, p2]).then((values) => {
      console.log(values);
      const productsInCartIds = values[1] && values[1].map((e) => e.id);
      const updatedProducts = [];
      if (values[1]) {
        values[0].forEach((product) => {
          productsInCartIds.includes(product.id)
            ? updatedProducts.push({ ...product, inCart: true })
            : updatedProducts.push({ ...product, inCart: false });
        });
      } else {
        values[0].forEach((product) => {
          updatedProducts.push({ ...product, inCart: false });
        });
      }
      if (updatedProducts.length > 0) {
        setProducts(updatedProducts);
      }
    });
  }, []);

  if (!products) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} productData={product} />
      ))}
    </div>
  );
}