import "./App.css";
import { useState } from "react";
import logo from "../src/assets/kogo.png";
import on from "../src/assets/on.png";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div className="forall">
        {!isSubmitted ? (
          <>
            <div className="anrisimage">
              <img src={logo} alt="logo" />
            </div>
            <div className="txt-lines">
              <h1>How did we do?</h1>
              <span>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </span>
              <div className="nums">
                <button
                  className={`first ${selectedRating === 1 ? "select" : ""}`}
                  onClick={() => handleRating(1)}
                >
                  <p>1</p>
                </button>
                <button
                  className={`first ${selectedRating === 2 ? "select" : ""}`}
                  onClick={() => handleRating(2)}
                >
                  <p>2</p>
                </button>
                <button
                  className={`first ${selectedRating === 3 ? "select" : ""}`}
                  onClick={() => handleRating(3)}
                >
                  <p>3</p>
                </button>
                <button
                  className={`first ${selectedRating === 4 ? "select" : ""}`}
                  onClick={() => handleRating(4)}
                >
                  <p>4</p>
                </button>
                <button
                  className={`first ${selectedRating === 5 ? "select" : ""}`}
                  onClick={() => handleRating(5)}
                >
                  <p>5</p>
                </button>
              </div>
            </div>
            <button onClick={handleSubmit}>SUBMIT</button>
          </>
        ) : (
          <div className="appreciate-you">
            <div className="select">
              <img src={on} alt="" />
              <div className="sp">
                <h3>
                  You selected <span>{selectedRating}</span> out of 5
                </h3>
              </div>
            </div>
            <h2>Thank you!</h2>

            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
