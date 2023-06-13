import React from "react";
import ReactDOM from "react-dom/client";

const content = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "1" },
      "Hello child 1 - 1! "
    ),
    React.createElement(
      "h1",
      { id: "heading", key: "2" },
      "Hello child 1 - 2!"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "1" },
      "Hello child 2 - 1!"
    ),
    React.createElement(
      "h1",
      { id: "heading", key: "2" },
      "Hello child 2 - 2!"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
