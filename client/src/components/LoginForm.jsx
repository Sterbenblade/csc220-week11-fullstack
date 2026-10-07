import React, { useState } from "react";

function LoginForm({ onLogin, loginError }) {
  const [email, setEmail] = useState("student1@example.com");
  const [password, setPassword] = useState("password123");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(email, password);
  }

  return (
    <section className="panel">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form-row">
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {loginError && <p className="error">{loginError}</p>}
    </section>
  );
}

export default LoginForm;
