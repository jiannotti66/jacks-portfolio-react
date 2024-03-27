import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" max-full w-full h-screen pt-60 bg-[#000000] flex-col justify-center  flex items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/zbxdonmb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-white text-[#00df9a]">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-xl">
            Submit the form below to contact me. 
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] px-4 py-3 my-8 mx-auto items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;