import * as React from "react";
import DateTime from "./DateTime.tsx";
import moment from "moment/min/moment-with-locales";
moment.locale("ru");
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 10000);

function withTime(Component: React.ComponentType<{ date: string }>) {
  return function DateTimePretty({ date }: { date: string }) {
    const prettyDate: string = moment(date).fromNow();
    return <Component date={prettyDate} />;
  };
}

const DateTimePretty = withTime(DateTime);
export default DateTimePretty;
