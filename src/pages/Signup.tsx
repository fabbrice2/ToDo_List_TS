import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import ValidationSignup from "./SignupValidation";

interface ErrorMessages {
  name?: string;
  email?: string;
  password?: string;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<ErrorMessages>({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = ValidationSignup(values);
    setErrors(validationErrors);

    if (
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.password
    ) {
      fetch("https://todo-list-ts-z22t.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#292B31] min-h-screen">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Sign-Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={values.name}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded"
          >
            Sign up
          </button>
          <p className="text-sm text-gray-600">
            You agree to our terms and policies
          </p>
          <Link
            to="/"
            className="block border border-gray-300 bg-gray-100 text-gray-700 py-2 rounded text-center text-sm hover:bg-gray-200"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
