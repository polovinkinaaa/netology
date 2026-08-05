/** реклама + Виджеты(погода, карта, ТВ…) - нижняя треть страницы */
import Widget from "./Widget.tsx";
import { widgets, type WidgetData } from "../data/widgetsData.tsx";

function WidgetsSection() {
  return (
    <>
      <img src="#" alt="Форсаж: Хоббс и Шоу" />
      {widgets.map((widget: WidgetData) => (
        <Widget key={widget.title} title={widget.title} link={widget.link}>
          {widget.content}
        </Widget>
      ))}
    </>
  );
}

export default WidgetsSection;
