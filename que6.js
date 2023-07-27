function reverseString(inputString) {
    const charArray = inputString.split('');
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join('');
  
    return reversedString;
  }

  const inputString = 'Hii I am lakindu';
  const reversedString = reverseString(inputString);
  console.log(reversedString);
  