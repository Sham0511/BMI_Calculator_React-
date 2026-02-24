import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";   
import NormalWeight from "../assets/Normalweight.jpg";
import Underweight from "../assets/UnderWeight.jpg";
import Overweight from "../assets/OverWeight.jpg";
import Obese from "../assets/obses.jpg";    

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, bmi } = location.state || {};
    if (!bmi) {
    return (
      <div className="container">
        <div className="card">
          <h2>No Data Found</h2>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }
  const getCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal Weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };
   const getImage = (bmi) => {
    if (bmi < 18.5) return Underweight;
    if (bmi < 24.9) return NormalWeight;
    if (bmi < 29.9) return Overweight;
    return Obese;
  };
   return (
    <div className="container">
      <div className="card">
        <h2>BMI Result</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Your BMI:</strong> {bmi}</p>
        <p><strong>Category:</strong> {getCategory(bmi)}</p>
        <img  src={getImage(bmi)}  alt="BMI Category" className="bmi-image" />
        <button onClick={() => navigate("/")}>
          Calculate Again
        </button>
      </div>
    </div>
  );
}

export default Result;
