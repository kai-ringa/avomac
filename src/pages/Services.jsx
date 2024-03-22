import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';
import avocadoImg from '../images/avocado.jpg';
import macadamiaImg from '../images/macadamia.jpg';

function Services() {
  const [avocadoKg, setAvocadoKg] = useState(0);
  const [macadamiaKg, setMacadamiaKg] = useState(0);
  const navigate = useNavigate();

  const avocadoPrice = 150;
  const macadamiaPrice = 130;

  const increaseAvocado = () => {
    setAvocadoKg(avocadoKg + 1);
  };

  const decreaseAvocado = () => {
    if (avocadoKg > 0) {
      setAvocadoKg(avocadoKg - 1);
    }
  };

  const increaseMacadamia = () => {
    setMacadamiaKg(macadamiaKg + 1);
  };

  const decreaseMacadamia = () => {
    if (macadamiaKg > 0) {
      setMacadamiaKg(macadamiaKg - 1);
    }
  };

  const handleOrderAvocado = () => {
    navigate(`/order`, {
      state: {
        product: 'Avocado',
        price: avocadoPrice,
        quantity: avocadoKg,
      },
    });
  };

  const handleOrderMacadamia = () => {
    navigate(`/order`, {
      state: {
        product: 'Macadamia Nuts',
        price: macadamiaPrice,
        quantity: macadamiaKg,
      },
    });
  };

  return (
    <section className="services-section" id="services">
      <div className="section-title">
        <h2>Services</h2>
        <div className="title-line"></div>
      </div>
      <div className="services-content">
        <div className="service-card">
          <img src={avocadoImg} alt="Avocado" className="service-img" />
          <div className="service-details">
            <h3>Avocado</h3>
            <p>Organic Hass Avocado</p>
            <p>Price: KSH. {avocadoPrice} per kg</p>
            <div className="quantity">
              <button onClick={decreaseAvocado}>-</button>
              <span>{avocadoKg} kg</span>
              <button onClick={increaseAvocado}>+</button>
            </div>
            <button className="order-btn" onClick={handleOrderAvocado}>
              Order Avocado
            </button>
          </div>
        </div>
        <div className="service-card">
          <img
            src={macadamiaImg}
            alt="Macadamia Nuts"
            className="service-img"
          />
          <div className="service-details">
            <h3>Macadamia Nuts</h3>
            <p>Raw Macadamia Nuts</p>
            <p>Price: KSH. {macadamiaPrice} per kg</p>
            <div className="quantity">
              <button onClick={decreaseMacadamia}>-</button>
              <span>{macadamiaKg} kg</span>
              <button onClick={increaseMacadamia}>+</button>
            </div>
            <button className="order-btn" onClick={handleOrderMacadamia}>
              Order Macadamia Nuts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
