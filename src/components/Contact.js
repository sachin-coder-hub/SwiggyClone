const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 ">Contact Us</h1>
      <p className="font-sans text-xl p-4">
        Hi there! How we can help you today?
      </p>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Your Message"
          className="border border-black p-2 m-2 rounded-lg"
        />
        <button className="border border-black p-2 m-2 bg-slate-900 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
