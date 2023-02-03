import { total } from "../helpers/test";

import { describe, expect, it } from "vitest";

var count = function (s: any) {
  let ar = s.split("");

  const uniq = new Set(ar);

  return uniq.size;
};

// describe("adds 1 + 2 to equal 3", () => {
//   it("return", () => {
//     expect(total(1, 2)).toBe(5);
//   });
// });

describe("size", () => {
  it("return", () => {
    expect(count("jsasbd")).toBe(4);
  });
});
