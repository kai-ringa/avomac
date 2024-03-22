import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <section className="contacts-section" id="contacts">
      <div className="section-title">
        <h2>Contact Us</h2>
        <div className="title-line"></div>
      </div>
      <div className="contacts-content">
        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
            <label htmlFor="name" className="label">
              Name
            </label>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="input"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              className="input"
              name="message"
              rows={6}
              required
              autoComplete="off"
            ></textarea>
            <label htmlFor="message" className="label">
              Message
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
