import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("App renders without crashing", () => {
  render(<App />);
});

test("contains sprint project", () => {
  const container = render(<App/>);
  console.log(container);

  container.getByText(/sprint/i);
  container.getByTestId(/header/i);
});
