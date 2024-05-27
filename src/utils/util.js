export const countHeight = (numerator, denominator, maxHeight) => {
  if (denominator <= 0) {
    return;
  }

  return Math.round(numerator / denominator * maxHeight);
};

export const countSumInObj = (obj) => {
  if (!obj) return;
  
  let sum = 0;
  for (let item in obj) {
    sum += obj[item]
  }
  return sum
};