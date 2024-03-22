import React from 'react';
import './Location.css';
import mapImage from '../images/map.jpg';

function Location() {
  return (
    <section className="location-section" id="location">
      <div className="section-title">
        <h2>Location</h2>
        <div className="title-line"></div>
      </div>
      <div className="location-content">
        <div className="map-container">
          <img src={mapImage} alt="Map" className="map-image" />
        </div>
        <div className="location-details">
          <h3>Farm</h3>
          <p>Central Kenya</p>
          <p>
            Located in the heart of Central Kenya, Avomac Farms is easily
            accessible by road. Come visit us to experience our organic avocados
            and macadamia nuts.
          </p>
          <div className="contact-info">
            <p>
              <strong>Address:</strong> Central Kenya
            </p>
            <p>
              <strong>Email:</strong> info@farm.com
            </p>
            <p>
              <strong>Phone:</strong> +254 123 456 789
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
