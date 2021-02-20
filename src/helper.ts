const toFloat = function (value: number, decimal: number) {
  return parseFloat(value.toFixed(decimal));
};

export { toFloat };
