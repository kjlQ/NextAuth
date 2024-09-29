import LoginForm from "@/components/register/LoginForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Login = () => {
  return (
    <section className="w-full h-screen flex items-center absolute top-0">
      <div className="p-8 shadow-md w-full max-w-2xl m-auto border rounded-2xl">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Create an Account</h1>
        <LoginForm />
        <div className="flex items-center gap-4 mt-5">
          <Separator className="flex-1" />
          <span className="text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex justify-center w-full">
          <Link href="/register">
            <Button className="underline mt-0 p-0 h-fit" variant="link">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
