function getArithmeticMean(numbers) {
  const numbersCount = numbers.length;
  const numbersSum = numbers.reduce((sum, number) => sum + number, 0);
  return numbersSum / numbersCount;
}

export { getArithmeticMean };
