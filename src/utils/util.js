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

export const formatNumber = (num) => {
  const options = {
    notation: 'compact',
    compactDisplay: 'short',
  };

  const formatter = new Intl.NumberFormat('ru-RU', options);

  return formatter.format(num);
}