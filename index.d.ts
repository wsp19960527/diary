//  获取当前年月
type BaseDate = {
  year: number
  month: number
  day: number
  fistDay: number
  date: string,
  currentDate: Date
}
type DateStr = Pick<BaseDate, 'year' | 'month' | 'day'>

type YearAndMonth = Pick<BaseDate, 'year' | 'month'>
