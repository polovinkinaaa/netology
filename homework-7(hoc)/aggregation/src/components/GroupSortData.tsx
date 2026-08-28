import type { DataType } from "../utils/types.ts";
import moment from "moment/min/moment-with-locales";
import React from "react";

moment.locale("ru");

function GroupSortData(
  Component: React.ComponentType<{ list: DataType[] }>,
  type: "month" | "year" | "sort",
) {
  return function DataPretty({ list }: { list: DataType[] }) {
    const sortedList = [...list].sort(
      (a, b) =>
        moment(b.date, "YYYY-MM-DD").valueOf() -
        moment(a.date, "YYYY-MM-DD").valueOf(),
    );

    const sortedListGroupByMonth: DataType[] = [];
    const sortedListGroupByYear: DataType[] = [];

    if (type === "month" && sortedList.length > 0) {
      const lastYear = moment(sortedList[0].date, "YYYY-MM-DD").year(); // нет текущего года — берём последний в data
      let i = 0;
      while (
        i < sortedList.length &&
        moment(sortedList[i].date, "YYYY-MM-DD").year() === lastYear
      ) {
        const item = sortedList[i];
        const month = moment(item.date, "YYYY-MM-DD").format("MMM");
        const lastMonth = sortedListGroupByMonth.at(-1);
        if (lastMonth?.month === month) {
          lastMonth.amount += item.amount;
        } else {
          sortedListGroupByMonth.push({ month, amount: item.amount });
        }
        i += 1;
      }
    }

    if (type === "year" && sortedList.length > 0) {
      for (const item of sortedList) {
        const date = moment(item.date, "YYYY-MM-DD");
        const year = date.year();
        const lastYear = sortedListGroupByYear.at(-1);
        if (lastYear?.year === year) {
          lastYear.amount += item.amount;
        } else {
          sortedListGroupByYear.push({ year, amount: item.amount });
        }
      }
    }
    const byType = {
      month: sortedListGroupByMonth,
      year: sortedListGroupByYear,
      sort: sortedList,
    };

    return <Component list={byType[type]} />;
  };
}

export default GroupSortData;
