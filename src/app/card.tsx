import styles from './card.module.css'
import { mdiTagOutline, mdiWeightKilogram, mdiBasketPlus, mdiCurrencyUsd } from '@mdi/js';
import Icon from '@mdi/react';

interface CardProps {
  data: {
    name: string;
    art: string;
    price: string;
    weight: number;
    brand: string;
    quantity: number;
  };
  onCardBuyClick: (data: any) => void;
}

const Card: React.FC<CardProps> = ({ data, onCardBuyClick }) => {
  const randomImageId = Math.floor(Math.random() * 1000);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <div className={styles.weight}>
          <Icon path={mdiWeightKilogram} size={1} />
          <div className={styles.articleText}>
            {data.weight}
          </div>
        </div>
        <div className={styles.article}>
          <Icon path={mdiTagOutline} size={1} />
          <div className={styles.articleText}>
            {data.art}
          </div>
        </div>
        <img src={`https://picsum.photos/300/300?random=${randomImageId}`} alt="Случайное изображение" />
      </div>
      <div className={styles.info}>
        <h4 className={styles.price}>
          <Icon path={mdiCurrencyUsd} size={1} />
          {data.price}
        </h4>
        <h3 className={styles.title}>{data.name}</h3>
        <h5 className={styles.brandName}>{data.brand}</h5> {/* Исправлено на brand */}
      </div>
      {
        data.quantity > 0 ?
          <button className={styles.button} onClick={() => onCardBuyClick(data)}>
            <Icon path={mdiBasketPlus} size={0.8} />
            <span>
              Купить
            </span>
          </button>
          :
          <button className={styles.button} disabled>
            Нет в наличии
          </button>
      }
    </div>
  );
}

export default Card;
