import React, { useEffect } from "react";
import "./App.css";

function App() {
  const newPortfolioUrl = "https://lokeshmanideep.github.io/";

  useEffect(() => {
    // Redirect to the new portfolio website
    window.location.replace(newPortfolioUrl);
  }, []);

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <h1>Portfolio Moved</h1>
        <p>This portfolio has moved to a new location.</p>
        <p>
          If you are not redirected automatically, please click the link below:
        </p>
        <a href={newPortfolioUrl} className="redirect-link">
          Visit New Portfolio →
        </a>
      </div>
    </div>
  );
}

export default App;
