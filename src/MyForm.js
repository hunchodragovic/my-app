import { useState } from "react";
import "./myform.css";

export default function MyForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    termsAccepted: false,
    gender: "",
    salary: ""
  });

  function handleSubmit(event) {
    event.preventDefault();

    // Simple validation before submission
    if (!data.name || !data.email || !data.phone || !data.age || !data.gender || !data.termsAccepted) {
      alert("Please fill out all required fields and accept the terms.");
      return;
    }

    console.log("Data Submitted:", data);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  return (
    <div>
      <form className="styled-form" onSubmit={handleSubmit}>
        <label>
          Name: (Min 3 characters)
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <hr />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <hr />
        <label>
          Phone number: (10 digits)
          <input
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            required
            min="0000000000"
            max="1000000000"
          />
        </label>
        <hr />
        <label>
          Age: (Between 18 and 100)
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            required
            min="18"
            max="100"
          />
        </label>
        <hr />
        <label>
          Gender:
          <select name="gender" value={data.gender} onChange={handleChange} required>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <hr />
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={data.termsAccepted}
            onChange={handleChange}
            required
          />
          I accept the terms and conditions
        </label>
        <hr />
        <label>
          Salary:
          <select name="salary" value={data.salary} onChange={handleChange}>
            <option value="">-- Select Salary Range --</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
