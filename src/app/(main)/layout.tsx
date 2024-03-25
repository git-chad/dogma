import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/global/infobar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar/>
        {props.children}</div>
    </div>
  );
};

export default Layout;
