import React from "react";
import "./Home.css";
import JSONDATA from "./Data.json";
import img from "../images/img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="home-header">
        <h2 className="title">
          Welcome to <span className="green-span">Babynama </span> Care center
        </h2>
      </div>
      <div className="body-section-heading">
        <h1 className="body-title">
          We will help you find your{" "}
          <span className="green-span">Wonderful</span> plans
        </h1>
      </div>
      <div className="plans-container">
        <div className="card-container">
          {JSONDATA.map((data, key) => {
            return (
              <div key={key}>
                <div className="indivisual-card">
                  <img src={img} />
                  <div className="card-title"><h2>{data.title}</h2></div>
                  <div className="card-content">
                    <h4>Duration: {data.duration}</h4>
                    <p>Features: Screening,Food,Toys </p>
                  <h2>Price: {data.Price}</h2>
                    </div>                
                  
                  <div className="footer">
                    <Link to="/Thank"><button class="button-3" role="button">Pay Now</button>
                    </Link>
                    
                    </div>
                    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
