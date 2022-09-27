import { useState, useEffect } from 'react';
import './style.css';

export default function Header() {
  const [isLogged, setIslogged] = useState(false);
  useEffect(() => {
    fetch('/api/v1/isLogged')
      .then((data) => {
        data.json();
        if (data.isToken) {
          setIslogged(true);
        } else {
          setIslogged(false);
        }
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
        <a href="/signin">Sign Out</a>
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
