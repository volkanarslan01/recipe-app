import { useState } from "react";
import axios from "../Api/axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register", {
        username,
        password,
      });
      alert("Registration Completed! Now Login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="sumbit">Register</button>
      </form>
    </div>
  );
};

export default Register;
