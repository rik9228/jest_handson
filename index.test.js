import { addString, toNumber, filterOrange } from "./index";

//  lesson01
describe("addString", () => {
  test("a and b are 'a' , 'b', to equal 'ab'", () => {
    expect(addString("a", "b")).toBe("ab");
  });

  test("a is 'a' , b is 1, to equal 'a1'", () => {
    expect(addString("a", 1)).toBe("a1");
  });

  test("a is 1 , b is 1, to equal -1", () => {
    expect(addString(1, 1)).toBe(-1);
  });
});

//  lesson02
describe("toNumber", () => {
  test("str is '123', to equal 123", () => {
    expect(toNumber("123", 10)).toBe(123);
  });

  test("str is '一二三', to equal NaN", () => {
    expect(toNumber("一二三", 10)).toBe(NaN);
  });
});

describe("filterOrange", () => {
  //  lesson03
  test("arr contains 'orange', return a new array with only 'orange' in it", () => {
    const fruit = ["orange", "apple", "peach"];
    expect(filterOrange(fruit)).toEqual(["orange"]);
  });

  test("arr does not contain 'orange', an empty array", () => {
    const fruit = ["apple", "peach"];
    expect(filterOrange(fruit)).toEqual([]);
  });
});
