import React from "react";
import GroupSortData from "./components/GroupSortData.tsx";
import type { DataType } from "./utils/types.ts";

const url = import.meta.env.VITE_DATA_URL;

function YearTable({ list }: { list: DataType[] }) {
  console.log("YearTable", list);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {list.map((item: DataType) => (
          <tr>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function SortTable({ list }: { list: DataType[] }) {
  console.log("SortTable", list);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {list.map((item: DataType) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function MonthTable({ list }: { list: DataType[] }) {
  console.log("MonthTable", list);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {list.map((item: DataType) => (
          <tr>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const MonthTableData = GroupSortData(MonthTable);
const YearTableData = GroupSortData(YearTable);
const SortTableData = GroupSortData(SortTable);

export default class App extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ list: data.list });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div id="app">
        <MonthTableData list={list} />
        <YearTableData list={list} />
        <SortTableData list={list} />
      </div>
    );
  }
}
