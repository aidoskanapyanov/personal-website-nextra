import React from "react";
import Sidebar from "../sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:mr-10 col-span-1 order-2 md:order-1">
          <Sidebar />
        </div>
        <div className="pb-10 md:p-12 col-span-2 order-1 md:order-2 border-b md:border md:dark:border-none md:rounded-lg md:dark:bg-[#1c1c1d]">
          {children}
        </div>
      </div>
    </div>
  );
}
