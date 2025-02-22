import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with additional class", () => {
    const expected = 'someClass class-1 class-2'
    expect(classNames("someClass", {}, ['class-1', 'class-2'])).toBe(expected)
  });
  test("with mods", () => {
    const expected = 'someClass hovered collapsed'
    expect(classNames("someClass", {hovered: true, collapsed: true}, [])).toBe(expected)
  });
  test("with mods false", () => {
    const expected = 'someClass hovered'
    expect(classNames("someClass", {hovered: true, collapsed: false}, [])).toBe(expected)
  });
  test("with mods undefined", () => {
    const expected = 'someClass hovered'
    expect(classNames("someClass", {hovered: true, collapsed: undefined}, [])).toBe(expected)
  });
});
