import type { PropsWithChildren } from "react";

function New({ children }: PropsWithChildren) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
}

export default New;
