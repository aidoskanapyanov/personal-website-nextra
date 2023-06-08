import AboutShort from "./AboutShort";
import Profile from "./Profile";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="dark:text-white flex flex-col divide-y-[1px] py-10">
      <Profile />
      <AboutShort />
    </div>
  );
}
