import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const serviceName = params.get("service");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/book-service`,
        {
          service: serviceName,
          name,
          address,
          mobile,
          state,
          city,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Session expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: "50px 20px", maxWidth: 600 }}>
      <div className="card shadow-lg p-4 rounded-4 bg-dark text-light">
        <h2 className="mb-4 text-center">Book a {serviceName}</h2>

        {success && (
          <div className="alert alert-success text-center">
            ✅ Booking saved successfully! We will contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input className="form-control" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input className="form-control" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required />
          <input className="form-control" placeholder="Mobile Number" value={mobile} onChange={e=>setMobile(e.target.value)} required />
          <input className="form-control" placeholder="State" value={state} onChange={e=>setState(e.target.value)} required />
          <input className="form-control" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} required />
          <input type="date" className="form-control" value={date} onChange={e=>setDate(e.target.value)} required />
          <input type="time" className="form-control" value={time} onChange={e=>setTime(e.target.value)} required />

          <button className="btn btn-primary btn-lg" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
