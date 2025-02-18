import dayjs from "dayjs";

export type dayjsType = Array<dayjs.Dayjs>;

export interface generateMonthDataType {
  currentMonthFirstDay: dayjs.Dayjs;
  generateMonthDateList: Array<dayjsType>;
}

export interface generateWeekDataType {
  currenWeekFirstDay: dayjs.Dayjs;
  generateWeekDateList: Array<dayjsType>;
}

export interface toutchType {
  x: number;
  y: number;
}

export interface weekType {
  id: number;
  name: string;
}
