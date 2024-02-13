import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Validation from "./LoginValidation";

interface FormValues {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{email?: string; password?: string;}>({});

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setErrors(Validation(values));
  
    if (!errors.email && !errors.password) {
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data === "Success") {
            navigate('/home');
          } else {
            alert('No record existed');
          }
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    }
  };
  
  return (
    
<div className="flex justify-center items-center bg-[#292B31] h-screen">
  <div className="bg-white p-6 rounded w-96">
    <h2 className="text-xl font-bold mb-4">Sign in</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleInput}
          className="w-full border rounded p-2"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handleInput}
          className="w-full border rounded p-2"
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}
      </div>
      <button type="submit" className="bg-green-500 text-white w-full py-2 rounded">
        Log in
      </button>
      <p className="text-sm">You agree to our terms and policies</p>
      <Link
        to="/signup"
        className="border bg-gray-200 w-full text-center py-2 rounded block text-decoration-none"
      >
        Create Account
      </Link>
    </form>
  </div>
</div>













  );
}

export default Login;