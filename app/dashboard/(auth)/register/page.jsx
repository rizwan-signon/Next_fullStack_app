"use client";

import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="max-w-lg mx-auto mt-16 py-20">
      <h1 className="text-center font-bold text-4xl text-blue-700 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Register
      </h1>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="flex flex-col gap-4 mt-6 py-6 px-6"
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="name"
          id="name"
          className="bg-gray-300 p-3 rounded-lg outline-none w-full"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          id="email"
          className="bg-gray-300 p-3 rounded-lg outline-none w-full"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          id="password"
          className="bg-gray-300 p-3 rounded-lg outline-none w-full"
        />
        <button className=" p-3 uppercase rounded-lg bg-blue-700 hover:opacity-85 w-full">
          register
        </button>
      </form>
    </main>
  );
};

export default Register;
