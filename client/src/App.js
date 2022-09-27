import { useEffect, useState } from 'react';
import ProductCart from './Components/ProductCard';
import './global_style.css';

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  if (!products) {
    return <h3>...Loading</h3>;
  }
  return (
    <div className="App">
      <div className="products-container">
        {products.map((product) => (
          <ProductCart key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
