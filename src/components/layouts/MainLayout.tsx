import React from "react";
import { MainLayoutProps } from "./interface";

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 bg-red">Slidebar</div>
      <div className="col-span-10 bg-slate-300">{children}</div>
    </div>
  );
};

export default MainLayout;
