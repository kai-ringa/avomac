import React from 'react';
import tree from '../images/tree.jpg';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-title">
        <h2>About Avomac</h2>
        <div className="title-line"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Avomac offers a platform for farms around the country to showcase
            and sell their organic produce. We started with a farm in central
            Kenya and are now expanding to incorporate farms in the Kilifi
            region.
          </p>
          <ul>
            <li>
              The farm featured is located in the heart of central Kenya,
              surrounded by breathtaking landscapes, the farm specializes in the
              cultivation of organic and natural avocados and macadamia nuts. It
              offers a variety of avocado types such as Hass and Fuerte.
            </li>
            <li>
              The farm is renowned for its sustainable farming practices,
              ensuring the highest quality produce while preserving the
              environment.
            </li>
            <li>
              We are eagerly preparing to open our doors to exports, providing
              these nutritious gems to international markets as soon as the
              government permits.
            </li>
            <li>
              For those interested in experiencing the farm firsthand, we offer
              guided tours where you can witness the beauty of our orchards and
              learn about the cultivation process.
            </li>
            <li>
              Visitors also have the opportunity to engage with our community
              initiatives, including educational programs and environmental
              conservation efforts.
            </li>
          </ul>
        </div>
        <div className="about-image">
          <img src={tree} alt="Avomac Farm" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default About;
