const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-2xl m-2">Contact us page.</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        ></input>
        <button className="border border-orange-700 m-2 p-2 bg-orange-500 rounded-lg text-white hover:shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
