import animationData from "@/public/images/404.json";
import Lottie from "react-lottie";

type Props = {};

export default function ProjectsTempPlaceholder({}: Props) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="mx-8 h-60 md:h-80">
      <Lottie options={options} />
    </div>
  );
}
