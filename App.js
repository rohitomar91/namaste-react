import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    This is JSX Heading 🚀
  </h1>
);

const HeadingComponent = () => (
  // <> </> know as React Fragments
  // We can write it like this also <React.Fragment></React.Fragment>
  <>
    <div className="container">
      <Title />
      <h1 className="heading">This is A Heading Component🚀</h1>
    </div>
    <div className="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
