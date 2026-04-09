import React, { useState } from "react";

const OfferDisplaying = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <h2>You will get an offer when You logged in with an account!</h2>
      {isLogged ? (
        <h3>You are now logged in!</h3>
      ) : (
        <h3>click the button to log in!</h3>
      )}

      <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Log Out" : "Log In"}
      </button>

      {isLogged ? (
        <p>Congratulations! You got 20% Discount!</p>
      ) : (
        <p>Get 20% Discount!</p>
      )}
    </div>
  );
};

export default OfferDisplaying;
