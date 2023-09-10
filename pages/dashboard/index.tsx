import GlassIcon from "@/components/GlassIcon";
import clsx from "clsx";
import Link from "next/link";
import { BiSolidCameraMovie, BiSolidDashboard, BiSolidUser } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import IconStatus from "@/components/IconStatus";
import DashboardLayout from "@/components/DashboardLayout";

interface DashboardProps {}



const Dashboard: React.FC<DashboardProps> = () => {
  return (
   <DashboardLayout>
      <div className="w-full flex gap-5">
          <IconStatus icon={<BiSolidCameraMovie />} label="movies" total="10"/>
          <IconStatus icon={<BiSolidUser />} label="users" total="20"/>
          <IconStatus icon={<AiFillSetting />} label="settings" total="50"/>
        </div>
   </DashboardLayout>
  );
};

export default Dashboard;
