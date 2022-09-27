/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ProductCart from '../ProductCard';

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const p1 = fetch('/api/v1/products').then((res) => res.json());
    const p2 = fetch(`/api/v1/cart`).then((res) => res.json());
    Promise.all([p1, p2]).then((values) => {
      console.log(values);
      const productsInCartIds = values[1].map((e) => e.productid);
      console.log(productsInCartIds);
      const updatedProducts = [];
      values[0].forEach((product) => {
        productsInCartIds.includes(product.id)
          ? updatedProducts.push({ ...product, inCart: true })
          : updatedProducts.push({ ...product, inCart: false });
      });
      if (updatedProducts.length > 0) {
        console.log(updatedProducts);

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
