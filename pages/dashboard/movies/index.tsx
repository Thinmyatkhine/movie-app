import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface MovieListingProps {}

const MovieListing: React.FC<MovieListingProps> = () => {
  const router = useRouter();
  return (
    <DashboardLayout
      title="Movies"
      button={
        <Button
          onClick={() => {
            router.push("/dashboard/movies/create");
          }}
        >
          Create
        </Button>
      }
    >
        
    </DashboardLayout>
  );
};

export default MovieListing;
