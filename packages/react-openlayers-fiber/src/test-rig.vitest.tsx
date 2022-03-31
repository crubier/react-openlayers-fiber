import { render,screen, userEvent } from "./test/utils";
import { Map } from "ol";
import React from "react";
import { describe, expect, it } from 'vitest'



// describe('Simple working test', () => {
//   it('the title is visible', () => {
//     render(<App />)
//     expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
//   })

//   it('should increment count on click', async() => {
//     render(<App />)
//     userEvent.click(screen.getByRole('button'))
//     expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
//   })
// })



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
