function Calendar({ date }) {
  const start_day = date.clone().startOf("month").startOf("isoWeek");
  const last_day = date.clone().endOf("month").endOf("isoWeek");
  const count_days = last_day.diff(start_day, "days") + 1;

  const days = Array.from({ length: count_days }, (_, i) => {
    const d = start_day.clone().add(i, "day");
    const className = d.isSame(date, "day")
      ? "ui-datepicker-today"
      : !d.isSame(date, "month")
        ? "ui-datepicker-other-month"
        : "";
    return {
      day: d.date(),
      className: className,
      key: d.format("YYYY-MM-DD"),
    };
  });

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  console.log(weeks);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{date.format("dddd")} </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.date()}</div>
          <div className="ui-datepicker-material-month">
            {date.format("D MMMM").split(" ")[1]}
          </div>
          <div className="ui-datepicker-material-year">{date.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.format("MMMM")}</span>
          &nbsp;<span className="ui-datepicker-year">{date.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day) => (
                <td className={day.className} key={day.key}>
                  {day.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
