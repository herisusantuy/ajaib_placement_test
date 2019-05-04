const formatCurrency = value => {
  let str = value.toString(),
    newValue = "",
    temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp = str[i] + temp;
    if (temp.length === 3 && i !== 0) {
      newValue = "." + temp + newValue;
      temp = "";
    }
    if (i === 0) {
      newValue = temp + newValue;
    }
  }
  return `Rp ${newValue}`;
};

export default formatCurrency;
