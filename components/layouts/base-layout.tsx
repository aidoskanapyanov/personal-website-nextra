import React from "react";
import Sidebar from "../sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="mt-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-4">
        <div className="basis-1/3 md:mr-10">
          <Sidebar />
        </div>
        <div className="basis-2/3">{children}</div>
      </div>
    </div>
  );
}
