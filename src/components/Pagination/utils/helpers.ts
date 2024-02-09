export const getFirstPageItemNumber = (
  itemsPerPage: number,
  currentPage: number,
) => {
  return itemsPerPage * (currentPage - 1) + 1;
};

export const getLastPagetItemNumber = (
  firstItemNumber: number,
  itemsPerPage: number,
  totalItems: number,
) => {
  const calculatedNumber = firstItemNumber + itemsPerPage - 1;
  const number = calculatedNumber > totalItems ? totalItems : calculatedNumber;

  return number;
};
