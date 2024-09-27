import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";

import { z } from "zod";
import { PasswordInput } from "../ui/passwordInput";

const minLengthErrorMessage = "Password must be at least 8 characters long.";
const maxLengthErrorMessage = "Password must not exceed 20 characters.";
const uppercaseErrorMessage = "Password must contain at least one uppercase letter.";
const lowercaseErrorMessage = "Password must contain at least one lowercase letter.";
const numberErrorMessage = "Password must contain at least one number.";
const specialCharacterErrorMessage = "Password must contain at least one special character (!@#$%^&*).";
const confirmPasswordMessage = "Password must match";

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email("This is not a valid email."),
    password: z
      .string()
      .min(8, { message: minLengthErrorMessage })
      .max(20, { message: maxLengthErrorMessage })
      .refine((password) => /[A-Z]/.test(password), {
        message: uppercaseErrorMessage,
      })
      .refine((password) => /[a-z]/.test(password), {
        message: lowercaseErrorMessage,
      })
      .refine((password) => /[0-9]/.test(password), { message: numberErrorMessage })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: specialCharacterErrorMessage,
      }),
    confirmPassword: z.string().min(1),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: confirmPasswordMessage,
      path: ["confirmPassword"],
    }
  );

const SignUpForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "tt",
      email: "re@gmail.com",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
    toast({
      title: "Success",
      description: "Please check you email to continue registration",
      variant: "success",
      duration: 4000,
    });
  };

  return (
    <div className="bg-background">
      <div className="w-full h-screen flex items-center">
        <div className="p-8 shadow-md w-full max-w-2xl m-auto border rounded-2xl">
          <h1 className="text-2xl font-bold mb-6 text-foreground">Create an Account</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <div className="flex items-center gap-4 mt-5">
            <Separator className="flex-1" />
            <span className="text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <Button variant={"link"} className="underline w-full mt-0">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
