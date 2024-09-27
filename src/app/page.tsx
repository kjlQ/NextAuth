"use client";

import SignUpForm from "@/components/SignIn/SignUpForm";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div>
      <SignUpForm />
      <Toaster />
    </div>
  );
}
