import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-screen">{children}</div>;
};

export default Layout;
