import ReactDOM from "react-dom";
import RegisterConfirmed from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const img = document.createElement("img");

  ReactDOM.render(<RegisterConfirmed />, div);
  ReactDOM.render(<RegisterConfirmed />, img);
});
