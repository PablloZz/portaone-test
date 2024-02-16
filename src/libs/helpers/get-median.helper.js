function getMedian(numbers) {
  const numbersCount = numbers.length;
  let median;
  median = numbers[Math.floor(numbersCount / 2)];

  const isEvenCount = numbersCount % 2 === 0;

  if (isEvenCount) {
    const lowerMedian = numbers[Math.floor((numbersCount - 1) / 2)];
    median = (median + lowerMedian) / 2;
  }

  return median;
}

export { getMedian };
