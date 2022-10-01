import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  const [userData, setUserdata] = useState({ loggedIn: false, checking: true });
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const p0 = fetch('/api/v1/isLogged').then((data) => data.json());
    const p1 = fetch(`/api/v1/cart`).then((res) => res.json());
    Promise.all([p0, p1]).then((values) => {
      if (values[0].istoken) {
        setUserdata({ loggedIn: true, checking: false, ...values[0] });
        setCart(values[1]);
      } else {
        setUserdata({ loggedIn: false, checking: false });
        console.log('p1', values[1]);
      }
    });
  }, []);

  return (
    <>
      <Header user={userData} cart={cart} />
      <div className="main" style={{ minHeight: '100vh' }}>
        {userData.checking ? (
          <div>loading</div>
        ) : (
          <Outlet context={[userData, setUserdata, cart, setCart]} />
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;
