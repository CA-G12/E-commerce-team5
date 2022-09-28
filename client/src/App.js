import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import Prodcuct from './Components/ProductPage';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  if (data) {
    const u = { ...data[0], inCart: true };
    return (
      <div className="App">
        <Prodcuct product={u} />
      </div>
    );
  }
}

export default App;
