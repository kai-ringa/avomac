import React from 'react';
import { useLocation } from 'react-router-dom';
import './Order.css';

function Order() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      {state && state.product === 'Avocado' && (
        <div className="invoice">
          <div className="invoice-details">
            <p>
              <strong>Product:</strong> {state.product}
            </p>
            <p>
              <strong>Price per kg:</strong> KSH.{state.price}
            </p>
            <p>
              <strong>Quantity:</strong> {state.quantity} kg
            </p>
            <p>
              <strong>Total:</strong> KSH.{state.price * state.quantity}
            </p>
          </div>
          <div className="payment-options">
            <h3>Payment Options</h3>
            <p>Choose your preferred payment method:</p>
            <button className="payment-btn">Pay Now</button>
            <button className="payment-btn">Pay Later</button>
          </div>
        </div>
      )}
      {state && state.product === 'Macadamia Nuts' && (
        <div className="invoice">
          <div className="invoice-details">
            <p>
              <strong>Product:</strong> {state.product}
            </p>
            <p>
              <strong>Price per kg:</strong> KSH.{state.price}
            </p>
            <p>
              <strong>Quantity:</strong> {state.quantity} kg
            </p>
            <p>
              <strong>Total:</strong> KSH.{state.price * state.quantity}
            </p>
          </div>
          <div className="payment-options">
            <h3>Payment Options</h3>
            <p>Choose your preferred payment method:</p>
            <button className="payment-btn">Pay Now</button>
            <button className="payment-btn">Pay Later</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
