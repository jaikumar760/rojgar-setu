import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Rojgar-Setu — All Rights Reserved.</p>
      <p>
        Designed by
        <a href="https://www.instagram.com/"> Jai kumar</a>
        
      </p>
      <div style={{ marginTop: 10 }}>
        <a href="jk4729954@gmail.com">Email Us</a>
        <a href="https://www.linkedin.com/in/jai-k-bb3861257/">LinkedIn</a>
      </div>
    </footer>
  );
}
