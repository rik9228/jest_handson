import { addString, toNumber, filterOrange } from "./index";

//  lesson01
test("aとbが'a'、'b'の時'ab'となる", () => {
  expect(addString("a", "b")).toBe("ab");
});

test("aが'a', bが1の時'a1'が返る", () => {
  expect(addString("a", 1)).toBe("a1");
});

test("aが1、bが1の時-1が返る", () => {
  expect(addString(1, 1)).toBe(-1);
});

//  lesson02
test("str が '123'だった場合、123が返る", () => {
  expect(toNumber("123", 10)).toBe(123);
});

test("str が '一二三'だった場合、NaNが返る", () => {
  expect(toNumber("一二三", 10)).toBe(NaN);
});

//  lesson03
test("arrが'orange'を含んでいる場合、'orange'のみが格納された新しい配列を返す", () => {
  const fruit = ["orange", "apple", "peach"];
  expect(filterOrange(fruit)).toEqual(["orange"]);
});

test("arrが'orange'を含んでいない場合、空の配列が返る", () => {
  const fruit = ["apple", "peach"];
  expect(filterOrange(fruit)).toEqual([]);
});
