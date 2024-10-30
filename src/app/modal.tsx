import { useState } from 'react';
import styles from './modal.module.css';
import axios from 'axios';

export default function Modal({ data, onClose }) {
  const [loading, setLoading] = useState(false);
  const onBuyClickHandler = async () => {
    
    try{
      setLoading(true)
      const order = (await axios.post('http://193.34.234.81:7077',
        {
          API: "storage",
          data: [
            {
              "art": data.art,
              "quantity": 1
            }
          ]
        }, {
        headers: {
          'app-id': 'f81135b6-a874-4b61-b671-8d3aa9700bfa'
        }
      }
      )).data
  
      alert('товар успешно куплен')
    }catch{
      alert('ошибка')
    }finally{
      setLoading(false)
    }

    // console.log(order)

    // axios.post('http://193.34.234.81:7077', {
    //   API: "buy",
    //   data: [
    //     {
    //       "id": order[0].id,
    //       "ip": true,
    //       "art": parseInt(order[0].art),
    //       "quantity": 1
    //     },
    //   ]
    // }, {
    //   headers: {
    //     'app-id': 'f81135b6-a874-4b61-b671-8d3aa9700bfa'
    //   }
    // })
    // .then(()=>{
    //   alert('товар успешно куплен')
    // })
    // .catch(()=>{
    //   alert('ошибка')
    // })
    // .finally(() => {
    //   setLoading(false)
    // })
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <img className={styles.img} src="https://i.pinimg.com/736x/7b/e3/95/7be3950e9596a694270d614f8327b822.jpg" alt="" />
        <h2>{data?.name}</h2>
        <p>{data?.brand}</p>
        <p>вес: {data.weight}kg</p>
        <p>артикл: {data.art}</p>

        {
          loading ?
            <button disabled className={styles.confirmButton}>Загрузка <span className={styles.loader}></span> </button>
            :
            <button onClick={onBuyClickHandler} className={styles.confirmButton}>Купить за {data.price}$</button>
        }
      </div>
    </div>
  );
}