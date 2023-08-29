import clsx from "clsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <main
      className={clsx(
        "w-screen h-screen bg-gradient-to-br from-blue-600/70 to-purple-600/70 text-net",
        "flex justify-center"
      )}
    >

      <Card className="w-[350px] h-max bg-white rounded shadow-lg mt-[7rem]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please login to your existing account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-[1.1rem]">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email*</Label>
                <Input id="email" type="email" placeholder="Please Enter Your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input id="password" type="password" placeholder="Please Enter Your Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end border-t border-black/10 pt-3 gap-3">
          <Button variant="outline">Register</Button>
          <Button>Login</Button>
        </CardFooter>
      </Card>

    </main>
  );
};

export default Login;
