import clsx from "clsx";
import { ReactNode } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

interface GlassIconProps {
  icon: ReactNode
}

const GlassIcon: React.FC<GlassIconProps> = ({icon}) => {
  return (
    <div className="group w-max h-max">
      <div
        className={clsx(
          "border-[3px] bg-white/10 border-white/60 w-[5rem] aspect-square rounded-lg text-4xl r",
          "flex justify-center items-center realtive overflow-hidden",
          "transition-all trans-duration ease-out",
          "backdrop-blur-sm shadow-lg cursor-pointer",
          "group-hover:translate-y-[-25%]",
          "before:content-[' '] before:w-[50%] before:h-[200%]",
          "before:top-[-50] before:left-[-125%] before:absolute",
          "before:transition-[left]  before:ease-out",
          "before:bg-white/40",
          "group-hover:before:left-[170%] before:rotate-[-45deg]"
        )}
      >
        <div className="drop-shadow-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default GlassIcon;
