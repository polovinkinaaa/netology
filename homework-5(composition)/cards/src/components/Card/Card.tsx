import "./Card.css";
import type { FC, PropsWithChildren } from "react";
const Card: FC<PropsWithChildren<{ image?: string }>> = ({
  children,
  image,
}) => (
  <div className="card">
    <img src={image} className="card-img-top" />
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
