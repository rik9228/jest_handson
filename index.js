//  lesson01
export function addString(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return a + b;
  } else {
    return -1;
  }
}

//  lesson02
export function toNumber(str) {
  return parseInt(str, 10);
}

//  lesson03
export function filterOrange(arr) {
  return arr.filter((e) => e === "orange");
}
