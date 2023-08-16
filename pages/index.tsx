import axios from "axios";
import { useState , useEffect } from "react"

export default function Home(){
  const defaultData = [] as any;
  const[movie,setMovie] = useState(defaultData);
   const fetchMovies = async() => {
    const response =await axios.get("http://localhost:3001/movies");
    if(response.data) {
      setMovie(response.data);
    }
   }
  useEffect(()=>{
    fetchMovies();
  },[])
  

  return (
    <main className="w-screen h-screen mt-[50px]">
      <div className="flex flex-col justify-center items-center gap-4">
        {movie.map((item :any) =>(
          <div key={item.id}>
            <h1 className="font-bold text-xl ">{item.name}</h1>
          </div>
        ))}
      </div>
    </main>
  )
}