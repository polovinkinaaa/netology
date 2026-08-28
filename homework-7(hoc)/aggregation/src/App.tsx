import React from "react";
import GroupSortData from "./components/GroupSortData.tsx";
import YearTable from "./components/YearTable.tsx";
import SortTable from "./components/SortTable.tsx";
import MonthTable from "./components/MonthTable.tsx";

const url = import.meta.env.VITE_DATA_URL;
const MonthTableData = GroupSortData(MonthTable, "month");
const YearTableData = GroupSortData(YearTable, "year");
const SortTableData = GroupSortData(SortTable, "sort");

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
