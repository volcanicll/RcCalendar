import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import RcCalendar from "./App";
import dayjs from "dayjs";

describe("RcCalendar Component", () => {
  it("renders calendar with correct header and week days", () => {
    render(<RcCalendar showHeader expandable mode="month" />);

    // 检查当前年月是否显示
    const currentYearMonth = dayjs().format("YYYY年MM月");
    expect(screen.getByText(currentYearMonth)).toBeInTheDocument();

    // 检查星期是否正确显示
    const weekDays = ["一", "二", "三", "四", "五", "六", "日"];
    weekDays.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it("switches between month and week view when clicking expand button", () => {
    render(<RcCalendar showHeader expandable mode="month" />);

    // 使用 getByTestId 替代 querySelector
    const calendarWrap = screen.getByTestId("calendar-wrap");

    // 初始状态应该是月视图（没有 pushHei 类）
    expect(calendarWrap).not.toHaveClass("pushHei");

    // 点击展开/收起按钮
    const expandButton = screen.getByRole("button");
    fireEvent.click(expandButton);

    // 切换后应该变成周视图（有 pushHei 类）
    expect(calendarWrap).toHaveClass("pushHei");
  });

  it('shows "回到今天" button when a different date is selected', () => {
    render(<RcCalendar showHeader expandable mode="month" />);

    // 初始状态下不应该显示"回到今天"按钮
    expect(screen.queryByText("回到今天")).not.toBeVisible();

    // 点击一个非今天的日期
    const futureDates = screen.getAllByRole("button");
    fireEvent.click(futureDates[10]); // 点击第10个日期

    // 现在应该显示"回到今天"按钮
    expect(screen.getByText("回到今天")).toBeVisible();
  });

  it("calls onChange when selecting a date", () => {
    const handleChange = vitest.fn();
    render(
      <RcCalendar showHeader expandable mode="month" onChange={handleChange} />
    );

    // 点击一个日期
    const dates = screen.getAllByRole("button");
    fireEvent.click(dates[0]);

    // 检查 onChange 是否被调用
    expect(handleChange).toHaveBeenCalled();
  });
});
