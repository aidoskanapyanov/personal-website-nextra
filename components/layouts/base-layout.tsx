import React from "react";
import Sidebar from "../sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="mt-6">
      <div className="grid md:grid-cols-3">
        <div className="md:mr-10 col-span-1 order-2 md:order-1">
          <Sidebar />
        </div>
        <div className="p-6 pb-14 md:p-14 col-span-2 order-1 md:order-2 border dark:border-none rounded-lg dark:bg-[#1c1c1d]">
          {children}
        </div>
      </div>
    </div>
  );
}
