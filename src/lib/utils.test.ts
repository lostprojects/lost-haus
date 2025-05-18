import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional values", () => {
    expect(cn("foo", false && "bar", undefined, null, "baz")).toBe("foo baz");
    expect(cn("foo", { bar: true, baz: false })).toBe("foo bar");
  });

  it("deduplicates conflicting tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
