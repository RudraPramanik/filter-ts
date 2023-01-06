import React from 'react';
import './styles.css';

interface Item {
  coverSrc: string;
  title: string;
  price: number;
  deliveryFee: number;
  serviceTime: string;
  rating: number;
}

interface Props {
  item: Item;
}

const ListItem: React.FC<Props> = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
  <div className="listItem-wrap">
    <img src={coverSrc} alt="" />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
