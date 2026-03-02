import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <h2>LocalPro - Connecting Service Providers</h2>
      <p>Plumbing, Electrical, Painting & Cooking Services</p>
      <button className="button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
        Need Help, Click here
      </button>
    </section>
  );
}
