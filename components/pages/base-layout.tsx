import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="basis-1/3 md:mr-10">
          Me
          {/* <Me/> component */}
        </div>
        <div className="basis-2/3">{children}</div>
      </div>
    </div>
  );
}
