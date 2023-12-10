
export const prestr = (i:number) => {
  return i > 9 ? i : '0' + i
}
//  获取上一个月
export const getLastMonth = (yearAndMonth:YearAndMonth):YearAndMonth => {

  let { year, month } = yearAndMonth
  if (month == 1) {
    year = year - 1
    month = 12
  } else {
    month = month - 1
  }

  return {
    year,
    month
  }
}
// 获取下一个月
export const getNextMonth = (yearAndMonth:YearAndMonth):YearAndMonth => {
  let {year, month} = yearAndMonth
  if (month == 12) {
    year = year + 1
    month = 1
  } else {
    month = month + 1
  }
  return {
    year,
    month
  }
}

export const getdays = (date?:BaseDate) => {
  let daysInMonth = []
  const { year,month, fistDay: firstDayOfMonth } = date ? date : useDate()
  // 计算需要填充的天数
  let daysToAddBefore = firstDayOfMonth == 0 ? 6 : firstDayOfMonth - 1

  // // 循环遍历前一个月的剩余天数
  let lastMOnth = getLastMonth({year,month})
  const lastdays = new Date(lastMOnth.month, lastMOnth.month, 0).getDate();
  for (let i = daysToAddBefore - 1; i >= 0; i--) {
    daysInMonth.push({
      type: 'last',
      day: prestr(lastdays - i),
      id: 'last' + (lastdays - i),
      month: lastMOnth.month,
      year: lastMOnth.year,
      date: `${lastMOnth.year}-${prestr(lastMOnth.month)}-${lastdays - i}`
    });
  }
  let currentMonthDays = new Date(year, month, 0).getDate();
  for (let i = 1; i <= currentMonthDays; i++) {
    let obj = {
      type: 'current',
      day: prestr(i),
      id: 'current' + i,
      month,
      year,
      date: `${year}-${prestr(month)}-${prestr(i)}`
    }
    daysInMonth.push(obj);
  }
  let next = getNextMonth({year, month})
  let total = daysInMonth.length > 35 ? 42 : 35
  // 计算需要填充的天数
  let daysToAddAfter = total - daysInMonth.length
  // 周日
  if (daysToAddAfter == 6) {
    daysToAddAfter = 0
  }
  // 循环遍历后一个月的剩余天数
  for (let i = 1; i <= total - currentMonthDays - daysToAddBefore; i++) {
    let type = 'next'
    let obj = {
      type,
      day: prestr(i),
      id: 'next' + i,
      month: next.year,
      year: next.month,
      date: `${next.year}-${prestr(next.month)}-${prestr(i)}`
    }
    daysInMonth.push(obj);
  }
  return daysInMonth;
}
