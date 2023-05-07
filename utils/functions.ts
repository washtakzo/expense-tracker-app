export const dateToFormattedString = (date: Date) => {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  month = month.length > 1 ? month : "0" + month;
  day = day.length > 1 ? day : "0" + day;

  return year + "-" + month + "-" + day;
};
