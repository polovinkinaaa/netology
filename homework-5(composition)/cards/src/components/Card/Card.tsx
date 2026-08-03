import "./Card.css";
import type { FC, PropsWithChildren } from "react";
const Card: FC<PropsWithChildren<{ image?: string }>> = ({
  children,
  image,
}) => (
  <div className="card">
    {image && <img src={image} className="card-img-top" alt="..." />}
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
