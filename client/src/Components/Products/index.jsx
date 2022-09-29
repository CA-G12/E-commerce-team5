/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import './styles.css';
import { useState, useEffect } from 'react';
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import ProductCart from '../ProductCard';

// eslint-disable-next-line react/prop-types
export default function Products({ userData }) {
  const [products, setProducts] = useState(null);
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, query] = useSearchParams({});
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
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      fetch(`api/v1/search/${q}`)
        .then((data) => data.json())
        .then((data) => setProducts(data));
    }
  }, [searchParams.get('q')]);

  if (!products) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container">
      <input
        value={searchParams?.q}
        placeholder="search products..."
        onChange={(e) => setSearchParams({ q: e.target.value })}
        className="search-input"
      />
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCart key={product.id} productData={product} user={user} />
          ))
        ) : (
          <h3>No data found</h3>
        )}
      </div>
    </div>
  );
}
