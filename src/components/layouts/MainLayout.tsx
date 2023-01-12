import React from "react";
import SideBar from "../sidebar";
import { SIDEBAR_LIST } from "../sidebar/constant";
import { MainLayoutProps } from "./interface";

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 bg-slate-500">
        <SideBar list={SIDEBAR_LIST} />
      </div>
      <div className="col-span-10 bg-slate-300">{children}</div>
    </div>
  );
};

export default MainLayout;
