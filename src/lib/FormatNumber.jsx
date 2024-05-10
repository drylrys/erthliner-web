function FormatNumber(number) {
  if (number) {
    // Convert the number to a string
    let numberString = number.toString();

    // Add a leading zero for numbers from 1 to 9
    if (number >= 1 && number <= 9) {
      numberString = "0" + numberString;
    }

    return numberString;
  }
  return 0;
}

export default FormatNumber;
