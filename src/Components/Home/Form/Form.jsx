import { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter valid email");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Invalid email");
    }

    if (email.endsWith("@ez.works")) {
      setInvalid({
        code: 422,
        message: "You can't enter email ends with @ez.works",
      });
      return;
    }

    try {
      const res = await axios.post("http://34.225.132.160:8002/api", { email });

      if (res.status === 200) {
        setSuccess(true);
        setEmail("");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {!success ? (
        <>
          <div className="form-field">
            <input
              className="input-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            <input className="submit-btn" type="submit" value="Contact Me" />
          </div>
          {error && <div className="error">{error}</div>}
          {invalid && <div className="invalid">{invalid.message}</div>}
        </>
      ) : (
        <div className="success">form submitted</div>
      )}
    </form>
  );
};

export default Form;
