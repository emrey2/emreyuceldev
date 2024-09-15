import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl fontbold inline border-b-4 border-white border-dashed text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit form below or mail me directly - myemail@mail.com
          </p>
        </div>
        <input
          className="bg-gray-500 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-500 p-2"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="text-center text-white px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
