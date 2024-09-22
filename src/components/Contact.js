const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-orange-600 shadow-lg rounded-2xl m-4 p-4 w-full max-w-lg">
        <h1 className="font-bold text-2xl p-4 text-center text-white">
          Contact Us
        </h1>
        <p className="font-sans text-xl p-4 text-center text-white">
          Hi there! How can we help you today?
        </p>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 m-2 rounded-lg w-2/3"
          />
          <input
            type="text"
            placeholder="Email"
            className="border p-2 m-2 rounded-lg w-2/3"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="border p-2 m-2 rounded-lg w-2/3"
          />

          {/* Center the submit button */}
          <div className="w-full flex justify-center mt-4">
            <button className="border border-black p-2 bg-slate-900 text-white rounded-lg w-1/2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
