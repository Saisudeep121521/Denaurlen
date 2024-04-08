const generateNumericOTP = () => {
  const digits = '0123456789';
  let numericOTP = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    numericOTP += digits[randomIndex];
  }
  return numericOTP;
};

module.exports = generateNumericOTP;
