/* eslint-disable react/prop-types */
import '../../global_style.css';
import './style.css';
import * as io from 'react-icons/io';
import { RiDeleteBinFill } from 'react-icons/ri';

function CartItem({ data }) {
  console.log(data);
  return (
    <div className="cart__item">
      <div className="img__counter">
        <img src={data.avatar} alt="" />
      </div>

      <div className="details__box">
        <div>
          <h3>hello world</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
            repellendus illo totam, odio officiis optio a incidunt aut
            architecto.
          </p>
        </div>
        <p>
          added at: <span>{data.timeadded}</span>
        </p>
      </div>

      <div className="img__counter">
        <div className="control">
          <p>50$</p>
          <div>
            <io.IoIosArrowUp className="btn" />
            <p>{data.quantity}</p>
            <io.IoIosArrowDown className="btn" />
          </div>
          <RiDeleteBinFill className="delete__btn" />
        </div>

        <div className="save__btn">
          <button type="button">save change</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
