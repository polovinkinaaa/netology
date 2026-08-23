import type { PropsWithChildren } from "react";

function Popular({ children }: PropsWithChildren) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
}

export default Popular;
