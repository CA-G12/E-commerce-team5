/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function Header({ user }) {
  console.log(user);
  return user.loggedIn ? (
    <nav className="header">
      <section>
        <Link to="/" className="link">
          <h1>Aligrandpa</h1>
        </Link>
      </section>
      <section>
        <section className="userdata">
          <Link className="link-cart" to="/cart">
            <BsFillCartFill />
          </Link>
        </section>
        <section>
          <div className="dropdown">
            <button className="dropbtn" type="button">
              <div
                className="userAvatar"
                style={{
                  backgroundImage: `url(${
                    user.avatar ||
                    `https://ui-avatars.com/api/?name=${user.username}&background=random`
                  })`,
                }}
              />
            </button>
            <div className="dropdown-content">
              <p className="link">{user.username}</p>
              <Link className="link" to="/logout">
                Logout <RiLogoutBoxLine />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </nav>
  ) : (
    <nav className="header">
      <section>
        <h1>Aligrandpa</h1>
      </section>
      <section>
        <Link className="login-sign link" to="/login">
          Log In
        </Link>
      </section>
    </nav>
  );
}
