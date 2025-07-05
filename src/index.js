module.exports = function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.reduce((acc, [opening, closing]) => {
    acc[opening] = closing;
    return acc;
  }, {});

  const openingBrackets = [];

  for (let i = 0; i < str.length; i += 1) {
    const curr = str[i];
    const top = openingBrackets.at(-1);

    // Opening bracket branch
    if (bracketPairs[curr]) {
      // Only distinct pairs
      if (bracketPairs[curr] !== curr) {
        openingBrackets.push(curr);
      }
      // Opening and closing brackets are the same
      else if (top !== curr) {
        openingBrackets.push(curr);
      } else {
        openingBrackets.pop();
      }
    }
    // Closing bracket branch
    else if (bracketPairs[top] === curr) {
      openingBrackets.pop();
    } else {
      return false;
    }
  }

  return !openingBrackets.length;
};
