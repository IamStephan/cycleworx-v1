import React, { Component } from 'react';
import styles from './contact.module.scss'

export default class Contact extends Component {
  render() {
    return (
      <div className={`${styles['contact']}`}>
        <section className={`${styles['contact-info']}`}>
          <h1>Contact Us</h1>
          <br />
          <div>
            <h2>Location</h2>
            <p>Madriko Centre Oostewal Road,</p>
            <p>Langebaan,</p>
            <p>7357</p>
          </div>
          <br />
          <div>
            <h2>Contact information</h2>
            <p><b>Email:</b> cycleworxlbn@gmail.com</p>
            <p><b>Tel:</b> 073 734 4098</p>
          </div>
        </section>

        <section className={`${styles['contact-map']}`}>
          <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.654929872723!2d18.031373715190103!3d-33.09186178087812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34aa1c81af2fa1%3A0xa59c10637dcd73b4!2sCycle%20Worx%20Langebaan!5e0!3m2!1sen!2sza!4v1572177033064!5m2!1sen!2sza" />
        </section>
      </div>
    );
  }
}
