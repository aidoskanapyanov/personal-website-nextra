import Link from "next/link";
import { useEffect, useState } from "react";

const Age = () => {
  const [age, setAge] = useState<string>();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("1996-03-05T18:30:00");
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

export default function Stats() {
  return (
    <div className="mt-6 mb-10 text-gray-500 dark:text-gray-300">
      <div className="grid grid-cols-2 gap-4 p-4 rounded-t-xl bg-[#F8F8F8] dark:bg-[#222222]">
        <p>Current age</p>
        <p>
          <Age />
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <p>Countries visited</p>
        <p>
          <Link
            href="https://www.google.com/maps/d/u/0/edit?mid=1Vd1bkr46MBCPaSz6Y4LecbkxXR-6GUs&usp=sharing"
            className="font-semibold decoration-dotted decoration-2 underline underline-offset-4 hover:no-underline"
            target="_blank"
          >
            2
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 rounded-b-xl bg-[#F8F8F8] dark:bg-[#222222]">
        <p>Current city</p>
        <p>Astana, Kazakhstan</p>
      </div>
    </div>
  );
}
