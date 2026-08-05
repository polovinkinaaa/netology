import type { ReactNode } from "react";

export type WidgetData = {
  title: string;
  link?: string;
  content: ReactNode;
};

export const widgets: WidgetData[] = [
  {
    title: "Погода",
    content: (
      <>
        <p>+17°</p>
        <p>Утром +17, днём +20</p>
      </>
    ),
  },
  {
    title: "Посещаемое",
    content: (
      <ul>
        <li>
          <a href="#">Недвижимость</a>
        </li>
        <li>
          <a href="#">Маркет</a>
        </li>
        <li>
          <a href="#">Авто.ру</a>
        </li>
      </ul>
    ),
  },
  {
    title: "Карта Германии",
    link: "#",
    content: <div>Карта</div>,
  },
  {
    title: "Телепрограмма",
    content: (
      <ul>
        <li>02:00 ТНТ. Best</li>
        <li>02:15 Джинглики</li>
        <li>02:25 Наедине со всеми</li>
      </ul>
    ),
  },
  {
    title: "Эфир",
    content: (
      <ul>
        <li>Управление как искусство</li>
        <li>Ночь. Мир в это время</li>
        <li>Андрей Возн...</li>
      </ul>
    ),
  },
];
