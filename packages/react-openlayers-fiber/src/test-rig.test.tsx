import { render } from "@testing-library/react";
import { Map } from "ol";
import React from "react";

describe("Test setup", () => {
  it("can run basic test", () => {
    expect(1).toBe(1);
  });
  it("can run inline snapshot test", () => {
    expect(1).toMatchInlineSnapshot(`1`);
  });
  it("can run dom snapshot test", () => {
    const { container } = render(<div>ok</div>);
    expect(container).toMatchSnapshot();
  });
  it("can run react testing library test", () => {
    const { getByText } = render(<div>ok</div>);
    const heading = getByText(/ok/i);
    console.log(heading);
    expect(heading).toMatchInlineSnapshot(`
<div>
  ok
</div>
`);
  });
  it("can run ol tests", () => {
    const map = new Map({});
    expect(map.getAllLayers().length).toBe(0);
  });
});
