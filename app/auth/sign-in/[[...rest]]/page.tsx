"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { login, signup } from "@/modules/auth/server/actions";

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    const result = await login(formData);
    if (result.error) {
      console.error("Login error:", result.error.message);
      return;
    }
  };
  const handleSignup = async (formData: FormData) => {
    const result = await signup(formData);
    if (result.error) {
      console.error("Signup error:", result.error.message);
      return;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-fit">
        <CardContent>
          <form
            className="flex flex-col gap-4 p-4 min-w-md  mt-10"
            method="post"
          >
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" type="email" required />
            <Label htmlFor="password">Password:</Label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={handleLogin}>Log in</Button>
            <Button formAction={handleSignup}>Sign up</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
