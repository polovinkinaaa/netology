/** Один виджет: название и его содержимое. */
import type { FC, PropsWithChildren } from "react";
const Widget: FC<PropsWithChildren<{ title: string; link?: string }>> = ({
  children,
  title,
  link,
}) => (
  <div>
    <h4>{link ? <a href={link}>{title}</a> : title}</h4>
    {children}
  </div>
);

export default Widget;
