import React from "react";

function Contact() {
  return (
    <div>
      {/* Form goes here */}
      <div className="container bg-white border border-light pb-4">
        <h2 className="text-info py-2">Contact</h2>

        <div className="container border border-dark mb-4"></div>

        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Smith"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>

        <button type="button" className="btn btn-info">
          Submit
        </button>
      </div>
      {/* Form ends here */}
    </div>
  );
}

export default Contact;
