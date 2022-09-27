import { useState, useEffect } from 'react';
import './style.css';
import { BsFillCartFill } from 'react-icons/fa';

export default function Header() {
  const [isLogged, setIslogged] = useState(true);
  const [userData, setUserdata] = useState({
    id: '1',
    username: 'Lesa',
    image:
      'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
  });

  useEffect(() => {
    fetch('/api/v1/isLogged')
      .then((data) => {
        data.json();
        setIslogged(true);
        setUserdata({
          id: 1,
          username: 'Lesa',
          image:
            'https://img.freepik.com/premium-photo/crossbredeed-cat-wearing-bell-isolated-white_191971-23879.jpg',
        });
        console.log(userData.username);
        // if (data.isToken) {
        //   setIslogged(true);
        // } else {
        //   setIslogged(false);
        // }
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
            {userData.username}
            <div
              className="userAvatar"
              style={{
                backgroundImage: `url(${userData.image})`,
              }}
            >
              hi
            </div>
          </button>
          <div className="dropdown-content">
            <a href={`/cart/${userData.id}`}>
              my Cart <BsFillCartFill />
            </a>
            <a href="/logout">Logout</a>
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
        <a href="/signin">Sign In</a>
      </section>
    </nav>
  );
}
