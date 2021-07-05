const savingInDollars = (product) => {
  return (product.listPrice - product.price).toFixed(2);
};

const saving = (product) => {
  return ((product.listPrice - product.price) * 100) / product.listPrice;
};

const savingInPercentage = (saving) => {
  return saving.toFixed(1);
};

let object = { saving, savingInDollars, savingInPercentage };

export default object;
