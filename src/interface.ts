import dayjs from 'dayjs';

export type weekType = {
  id: number;
  name: string;
};
export type toutchType = { x: number; y: number };

export type dayjsType = Array<dayjs.Dayjs>;

export type generateWeekDataType = {
  currenWeekFirstDay: dayjs.Dayjs;
  generateWeekDateList: Array<dayjsType>;
};

export type generateMonthDataType = {
  currentMonthFirstDay: dayjs.Dayjs;
  generateMonthDateList: Array<dayjsType>;
};
