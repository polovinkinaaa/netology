import "./Collapse.css";
import { type FC, type PropsWithChildren, useState } from "react";
const Collapse: FC<
  PropsWithChildren<{ collapsedLabel?: string; expandedLabel?: string }>
> = ({
  collapsedLabel = "Развернуть",
  expandedLabel = "Свернуть",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <div> {expandedLabel} </div> : <div> {collapsedLabel} </div>}
      </button>
      <div className={`content${isOpen ? " open" : ""}`}>{children}</div>
    </div>
  );
};

export default Collapse;
