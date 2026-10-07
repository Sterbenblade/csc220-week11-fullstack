import React, { useState } from "react";

function AddStudentForm({ onAdd, disabled }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !major.trim() || score === "") return;
    onAdd({ name: name.trim(), major: major.trim(), score: Number(score) });
    setName("");
    setMajor("");
    setScore("");
  }

  return (
    <section className="panel">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="form-row">
        <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} disabled={disabled} required />
        <input type="text" placeholder="Major" value={major} onChange={(event) => setMajor(event.target.value)} disabled={disabled} required />
        <input type="number" min="0" max="100" placeholder="Score" value={score} onChange={(event) => setScore(event.target.value)} disabled={disabled} required />
        <button type="submit" disabled={disabled}>Add</button>
      </form>
    </section>
  );
}

export default AddStudentForm;
