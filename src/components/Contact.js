import { useState } from "react";
import contactUsImg from "../components/assets/contactUsImg.png";
import { Link } from "react-router-dom";

const Contact = () => {
  // State to track form input data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isContacted, setIsContacted] = useState(false);

  // Handle input change to update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsContacted(true);
  };

  return (
    <div className="flex justify-center">
      {!isContacted && (
        <div className="bg-orange-600 shadow-lg rounded-2xl m-4 p-4 w-full max-w-lg">
          <h1 className="font-bold text-2xl p-4 text-center text-white">
            Contact Us
          </h1>
          <p className="font-sans text-xl p-4 text-center text-white">
            Hi there! How can we help you today?
          </p>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name" // Bind to formData state
              value={formData.name}
              onChange={handleChange} // Update state on change
              placeholder="Name"
              className="border p-2 m-2 rounded-lg w-2/3"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 m-2 rounded-lg w-2/3"
              required
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border p-2 m-2 rounded-lg w-2/3"
              required
            />

            {/* Center the submit button */}
            <div className="w-full flex justify-center mt-4">
              <button className="border border-black p-2 bg-slate-900 text-white rounded-lg w-1/2">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {isContacted && (
        <div className="text-center">
          <img src={contactUsImg} className="w-96 h-64 m-5" alt="Thank you!" />
          <p className="font-bold text-xl mt-4">
            Thank you for contacting us, {formData.name}!
          </p>
          <Link to="/" className="mt-4 text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
