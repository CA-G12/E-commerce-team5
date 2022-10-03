import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  const [userData, setUserdata] = useState({ loggedIn: false, checking: true });
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("/api/v1/isLogged")
      .then((data) => data.json())
      .then((res) => {
        if (res.istoken) {
          setUserdata({ loggedIn: true, checking: false, ...res });
        } else {
          setUserdata({ loggedIn: false, checking: false });
        }
      });
  }, []);
  useEffect(() => {
    if (userData.loggedIn) {
      fetch(`/api/v1/cart`)
        .then((res) => res.json())
        .then((res) => setCart(res));
    }
  }, [userData]);

  return (
    <>
      <Header user={userData} cart={cart} />
      <div className="main" style={{ minHeight: "100vh" }}>
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
