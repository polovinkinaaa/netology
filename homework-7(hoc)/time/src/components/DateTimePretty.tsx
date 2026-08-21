import * as React from "react";
import DateTime from "./DateTime.tsx";

function withTime(Component: React.ComponentType<{ date: string }>) {
  return function DateTimePretty({ date }: { date: string }) {
    const prettyDate: string = date;
    return <Component date={prettyDate} />;
  };
}

const DateTimePretty = withTime(DateTime);
export default DateTimePretty;
