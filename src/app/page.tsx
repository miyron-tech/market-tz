"use client"; // Укажите, что это клиентский компонент

import { useState, useEffect } from 'react'; // Импортируйте useEffect
import Card from "./card";
import axios from "axios";
import styles from './page.module.css';
import Modal from "./modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://193.34.234.81:7077', {
          API: "price"
        }, {
          headers: {
            'app-id': 'f81135b6-a874-4b61-b671-8d3aa9700bfa'
          }
        });
        setData(response.data); 
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const handleCardBuyClick = (cardData:any) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCardData(null);
  };

  return (
    <div>
      {isModalOpen && <Modal data={selectedCardData} onClose={handleCloseModal} />}
      <div className={styles.cards}>
        {data.map((item, index) => (
          <Card key={index} data={item} onCardBuyClick={() => handleCardBuyClick(item)} />
        ))}
      </div>
    </div>
  );
}
