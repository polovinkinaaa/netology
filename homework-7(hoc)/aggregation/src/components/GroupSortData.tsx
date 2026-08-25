import type { DataType } from "../utils/types.ts";
import React from "react";

function GroupSortData(Component: React.ComponentType<{ list: DataType[] }>) {
  return function DataPretty({ list }: { list: DataType[] }) {
    const content = <Component list={list} />;
    return content;
  };
}

export default GroupSortData;
