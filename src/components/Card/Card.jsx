import { useState } from 'react';
import PropTypes from 'prop-types';
import hero from '../../assets/hero.png';
import styles from './Card.module.css';

const Card = ({ id, name = 'Unable to retrieve product info', price, img = hero, onSubmit }) => {
  const [quantity, setQuantity] = useState(0);

  const onSubmitCart = (event) => {
    event.preventDefault();
    onSubmit(id, quantity);
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <form onSubmit={(event) => onSubmitCart(event)} className={styles.form}>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
          className={styles.quantity}
        />
        <button className={styles.submitBtn}>Add to Cart</button>
      </form>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export { Card };
