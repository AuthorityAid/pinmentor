'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date("2026-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <img src="/logo.png" style={styles.logo} />
        <h1 style={styles.title}>PinMentor</h1>
        <p style={styles.tagline}>Smarter Growth for Pinterest Creators</p>

        <h2>🚧 Website Under Maintenance</h2>
        <p>We are building a powerful Pinterest growth platform.</p>

        <div style={styles.countdown}>
          {Object.keys(timeLeft).map((key) => (
            <div key={key}>
              <strong>{timeLeft[key]}</strong>
              <span>{key}</span>
            </div>
          ))}
        </div>

        <form style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email for launch alert"
            required
            style={styles.input}
          />
          <button style={styles.button}>Notify Me</button>
        </form>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#e60023,#ff6a88)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    maxWidth: "420px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  logo: { width: "90px", marginBottom: "10px" },
  title: { color: "#e60023", fontSize: "36px" },
  tagline: { marginBottom: "20px" },
  countdown: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  form: { marginTop: "20px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#e60023",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
