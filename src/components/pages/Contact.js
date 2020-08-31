import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_btH0u4ho_clone",
        e.target,
        "user_H6Pa2RP1OUsikhzB1k00c"
      )
      .then(
        result => {
          console.log(result.text);
          alert("sent!")
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact">
      {/* Form goes here */}
      <div className="container bg-white border border-light pb-4 form">
        <h2 className="text-info py-2">Contact</h2>

        <div className="container border border-dark mb-4"></div>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="from_name"
              placeholder="John Smith"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="from_email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message_html"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
      {/* Form ends here */}
    </div>
  );
}

export default Contact;
