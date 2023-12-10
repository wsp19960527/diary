

export const useDate = (date?: DateStr): BaseDate =>  {
  const currentDate = date ? new Date(date.year, date.month, date.day) : new Date();
  const year = currentDate.getFullYear();
  const month = date ? date.month : currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const fistDay = currentDate.getDay();
  return {
    currentDate,
    year,
    month,
    day,
    fistDay,
    date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  };
}
