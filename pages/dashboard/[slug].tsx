import DashboardLayout from "@/components/DashboardLayout";
import IconStatus from "@/components/IconStatus";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiSolidCameraMovie, BiSolidDashboard, BiSolidUser } from "react-icons/bi";

interface DashboardDetailProps {
    
}

const DashboardDetail: React.FC<DashboardDetailProps> = () => {
   const router = useRouter();
   let param = router?.query?.slug as any;
    return (  
        <DashboardLayout title={param}>
            Hello 
        </DashboardLayout>
    )}
 
export default DashboardDetail;