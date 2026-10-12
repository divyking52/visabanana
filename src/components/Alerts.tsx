import { FormEvent, useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Alerts() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Please enter a valid email address.");
      setDone(false);
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section className="section alerts-section">
      <div className="container">
        <div className="card alerts-card">
          <div>
            <span className="chip chip-soft">Visa policy alerts · weekly</span>
            <h2 className="section-title small-title">
              Never miss a policy change for the country you're <em>flying to.</em>
            </h2>
            <p className="muted">
              Embassies update visa rules with no warning. Subscribe and we'll email you the moment something
              changes for a destination you've applied to or saved.
            </p>
          </div>

          {done ? (
            <p className="success" role="status">
              Thanks — you're subscribed. We'll be in touch when rules change.
            </p>
          ) : (
            <form className="alerts-form" onSubmit={submit} noValidate>
              <label htmlFor="alert-email" className="sr-only">
                Email address
              </label>
              <input
                id="alert-email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "alert-error" : "alert-help"}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe →
              </button>
              {error ? (
                <p id="alert-error" className="error" role="alert">
                  {error}
                </p>
              ) : (
                <p id="alert-help" className="muted small">
                  No spam. Unsubscribe any time.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
