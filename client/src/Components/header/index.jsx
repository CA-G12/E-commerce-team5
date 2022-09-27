import { useState, useEffect } from 'react';
import './style.css';
import { BsFillCartFill } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function Header() {
  const [isLogged, setIslogged] = useState(false);
  const [userData, setUserdata] = useState({
    id: '',
    username: '',
    image: '',
  });

  useEffect(() => {
    fetch('/api/v1/isLogged')
      .then((data) => {
        if (data.status === 401) {
          setIslogged(false);
        } else if (data.status === 200) {
          setIslogged(true);
        }
        return data.json();
      })
      .then((data) => {
        setUserdata({
          id: data.id,
          username: data.username,
          image: data.image
            ? data.image
            : 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return isLogged ? (
    <nav className="header">
      <section>
        <h1>Aligrandpa</h1>
      </section>
      <section>
        <div className="dropdown">
          <button className="dropbtn" type="button">
            <div
              className="userAvatar"
              style={{
                backgroundImage: `url(${userData.image})`,
              }}
            />
            {userData.username}
          </button>
          <div className="dropdown-content">
            <a href={`/cart/${userData.id}`}>
              my Cart <BsFillCartFill />
            </a>
            <a href="/logout">
              Logout <RiLogoutBoxLine />
            </a>
          </div>
        </div>
      </section>
    </nav>
  ) : (
    <nav className="header">
      <section>
        <h1>Aligrandpa</h1>
      </section>
      <section>
        <a className="login-sign" href="/login">
          Log In
        </a>
      </section>
    </nav>
  );
}
