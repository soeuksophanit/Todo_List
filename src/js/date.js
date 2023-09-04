export const day = (d) => {
  let today = "";
  if (d == 0) today = "Sunday";
  if (d == 1) today = "Monday";
  if (d == 2) today = "Tuesday";
  if (d == 3) today = "Wednesday";
  if (d == 4) today = "Thursday";
  if (d == 5) today = "Friday";
  if (d == 6) today = "Saturday";
  return today;
};

export const month = (m) => {
  let month = "";
  if (m == 0) month = "Jan";
  if (m == 1) month = "Feb";
  if (m == 2) month = "Mar";
  if (m == 3) month = "Apr";
  if (m == 4) month = "May";
  if (m == 5) month = "Jun";
  if (m == 6) month = "Jul";
  if (m == 7) month = "Aug";
  if (m == 8) month = "Sep";
  if (m == 9) month = "Oct";
  if (m == 10) month = "Nov";
  if (m == 11) month = "Dec";
  return month;
};
