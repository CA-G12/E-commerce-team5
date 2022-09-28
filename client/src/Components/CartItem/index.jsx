/* eslint-disable react/prop-types */
import '../../global_style.css';
import './style.css';
import * as io from 'react-icons/io';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartItem({ data }) {
  const [state, setState] = useState(data);
  const notify = () => toast('saved successfully!');
  const { image, name, timeadded, price, quantity, id } = state;

  const handleQuantity = (type) => {
    if (type === '+') {
      setState({ ...state, quantity: state.quantity + 1 });
    } else if (type === '-') {
      if (state.quantity === 0) {
        return;
      }
      setState({ ...state, quantity: state.quantity - 1 });
    }
  };

  useEffect(() => {
    if (data.userid) {
      if (Number(data.quantity)) {
        setState(data);
      } else {
        setState({ ...data, quantity: 0 });
      }
    }
  }, []);

  const handleSubmit = () => {
    fetch('/api/v1/cart', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        q: quantity,
      }),
    }).then(() => notify());
  };

  return (
    <div className="cart__item">
      <div className="img__counter">
        <img src={image} alt="" />
      </div>

      <div className="details__box">
        <div>
          <h3>{name}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
            repellendus illo totam, odio officiis optio a incidunt aut
            architecto.
          </p>
        </div>
        <p>
          added at: <span>{new Date(timeadded).toLocaleDateString()} </span>
          <span style={{ fontSize: '15px' }}>
            {' '}
            {new Date(timeadded).toLocaleTimeString()}
          </span>
        </p>
      </div>

      <div className="img__counter">
        <div className="control">
          <p>${price * quantity}</p>
          <div>
            <io.IoIosArrowUp
              className="btn"
              onClick={() => handleQuantity('+')}
            />
            <p>{state.quantity || 0}</p>
            <io.IoIosArrowDown
              className="btn"
              onClick={() => handleQuantity('-')}
            />
          </div>
          <RiDeleteBinFill className="delete__btn" />
        </div>

        <div className="save__btn">
          <button type="button" onClick={handleSubmit}>
            save change
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: 'black', color: '#14a44d' }}
      />
    </div>
  );
}

export default CartItem;
