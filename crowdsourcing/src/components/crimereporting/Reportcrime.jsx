import React, { useState } from "react";
import police from "../assets/police.jpg";
import "./reportcrime.css";

export default function Reportcrime() {
  const [formData, setFormData] = useState({
    name: "",
    tel_no: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/reported_crimes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Crime reported successfully!");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to report crime.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="italic text-center font-bold text-4xl text-cyan-600">
        Report
        <span className="text-rose-600 ml-2">crime</span>.
      </h1>
      <div className="crime_content">
        <img src={police} alt=" police" />
        <form
          onSubmit={handleSubmit}
          className="ml-40 bg-purple-300 rounded-lg"
        >
          <h1 className="text-center text-2xl font-bold italic text-sky-600">
            Report form.
          </h1>
          <div className="form_content">
            <label htmlFor="name" className="text-indigo-600 italic font-bold">
              Full Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              className="rounded-md mt-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_content">
            <label htmlFor="tel_no" className="text-indigo-600 italic font-bold">
              Phone Number
            </label>
            <br />
            <input
              type="text"
              name="tel_no"
              value={formData.tel_no}
              className="rounded-md mt-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_content">
            <label htmlFor="location" className="text-indigo-600 italic font-bold">
              Location
            </label>
            <br />
            <input
              type="text"
              name="location"
              value={formData.location}
              className="rounded-md mt-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_content">
            <label htmlFor="description" className="text-indigo-600 italic font-bold">
              Describe
            </label>
            <br />
            <input
              type="text"
              name="description"
              value={formData.description}
              className="rounded-md mt-2 py-3"
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn_cont">
            <button
              type="submit"
              className="bg-rose-400 px-4 text-gray-600 py-2 hover:bg-rose-600 hover:scale-110 active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
