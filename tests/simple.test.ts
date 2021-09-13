import pack from "../src/index";

describe("simple", () => {
  it("pack", () => {

    const p = new pack();

    expect(p.do(10)).toBe(50);
  });
});
