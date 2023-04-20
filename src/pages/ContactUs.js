import React from 'react';

function ContactUs() {
  return (
    <form>
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </section>
    </form>
  );
}

export default ContactUs;
