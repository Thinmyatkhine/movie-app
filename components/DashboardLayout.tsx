import IconStatus from "@/components/IconStatus";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiSolidCameraMovie, BiSolidDashboard, BiSolidUser } from "react-icons/bi";

interface DashboardDetailProps {
    children: any;
}
const links = [
    {
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      label: "Movies",
      url: "/dashboard/movies",
    },
    {
      label: "Users",
      url: "/dashboard/users",
    },
    {
      label: "Settings",
      url: "/dashboard/settings",
    },
  ];
const DashboardLayout: React.FC<DashboardDetailProps> = ({children}) => {
    const router = useRouter();
    const slug = router.query?.slug;
    return (  
    <main className="flex flex-row w-screen h-screen overflow-hidden">
    <div className="flex flex-col overflow-y-auto w-[20%] h-screen bg-black text-white">
      <h3 className="flex items-center p-5 mt-5 font-bold text-2xl gap-3">
        <BiSolidDashboard /> Movies Conner
      </h3>
      {links.map((item) => (
        <Link
          className="w-full px-7 py-2 text-md font-bold hover:text-black hover:bg-slate-50"
          href={item.url}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </div>
    <div className={clsx(
      "w-[80%] h-screen flex flex-col p-5 pt-9",
      "text-white font-bold bg-gradient-to-br from-blue-600/90 to-purple-600/90"
    )}>
      <h1 className="text-4xl drop-shadow-lg mb-5 uppercase">{slug}</h1>
      {children}
    </div>
  </main> );
}
 
export default DashboardLayout;