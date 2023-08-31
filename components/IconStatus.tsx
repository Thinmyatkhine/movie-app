import { ReactNode } from "react";
import GlassIcon from "./GlassIcon";

interface IconStatusProps {
  icon: ReactNode;
  label: string;
  total: string;
}

const IconStatus: React.FC<IconStatusProps> = ({ icon, label, total }) => {
  return (
    <div className="w-max flex items-center gap-3 p-3">
      <GlassIcon icon={icon} />
      <div>
        <h5 className="text-xl uppercase font-bold drop-shadow-lg">{label}</h5>
        <p className="text-sm">Total: {total}</p>
      </div>
    </div>
  );
};

export default IconStatus;
