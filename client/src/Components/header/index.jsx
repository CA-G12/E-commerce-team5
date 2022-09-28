/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
import './style.css';
import { BsFillCartFill } from 'react-icons/bs';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function Header({ user }) {
  return user.loggedIn ? (
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
                backgroundImage: `url(${
                  user.avatar ||
                  `https://ui-avatars.com/api/?name=${user.username}&background=random`
                })`,
              }}
            />
            {user.username}
          </button>
          <div className="dropdown-content">
            <a href={`/cart/${user.id}`}>
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
