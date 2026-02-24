import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    navigate("/result", {
      state: { name, bmi }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>BMI Calculator</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <button type="submit">Calculate BMI</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
