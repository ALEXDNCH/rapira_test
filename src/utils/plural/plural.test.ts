import {describe, it, expect} from "vitest";
import {pluralRu} from "./index";

describe("pluralRu (ru pluralization)", () => {
  it("works with other word sets", () => {
    const comments: [string, string, string] = ["комментарий", "комментария", "комментариев"];
    expect(pluralRu(1, comments)).toBe("комментарий");
    expect(pluralRu(3, comments)).toBe("комментария");
    expect(pluralRu(7, comments)).toBe("комментариев");
    expect(pluralRu(0, comments)).toBe("комментариев");
  });
});
