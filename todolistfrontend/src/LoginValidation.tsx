interface FormValues {
    email: string;
    password: string;
  }
  
  interface ErrorMessages {
    email: string;
    password: string;
  }
  
  function Validation(values: FormValues): ErrorMessages {
    alert("");
  
    let error: ErrorMessages = {
      email: "",
      password: ""
    };
  
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      error.email = "Email didn't match";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      error.password = "Password didn't match";
    }
  
    return error;
  }
  
  export default Validation;