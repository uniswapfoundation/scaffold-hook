// Helper function to convert sqrtPriceX96 to a formatted price
const convertSqrtPriceX96ToPrice = sqrtPriceX96 => {
  // Step 1: Convert fixed-point to floating-point
  const sqrtPriceX96ToFloat = sqrtPrice => sqrtPrice / Math.pow(2, 48);

  // Step 2: Square to get the actual price
  const actualPrice = sqrtPrice => Math.pow(sqrtPrice, 2);

  // Perform conversions
  const sqrtPriceFloat = sqrtPriceX96ToFloat(Number(sqrtPriceX96));
  const price = actualPrice(sqrtPriceFloat);

  // Format to 2 decimal places
  return price.toFixed(6);
};

export default convertSqrtPriceX96ToPrice;
