"use client";

import React from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const SignupPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
    })
    // console.log(data, error)
    if (data) {
      toast.success(`Welcome ${user.name}! Account created successfully`)
      redirect('/')
    }
    if (error) {
      toast('Something went Wrong')
    }
  }

  // const handleLoginWithGoogle = async () => {
  //   await authClient.signIn.social({
  //     provider: 'google'
  //   })
// }


return (
  <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-neutral-950">

    <div className="w-full max-w-md rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Create account
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Sign up to get started
        </p>
      </div>

      {/* FORM */}
      <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

        {/* NAME */}
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input className="mt-2" placeholder="John Doe" />
          <FieldError />
        </TextField>

        {/* EMAIL */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Enter a valid email";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="mt-2" placeholder="john@example.com" />
          <FieldError />
        </TextField>

       
        {/* PASSWORD */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Minimum 8 characters required";
            if (!/[A-Z]/.test(value)) return "Add 1 uppercase letter";
            if (!/[0-9]/.test(value)) return "Add 1 number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input className="mt-2" placeholder="Create password" />

          <Description className="text-xs mt-1">
            8+ chars, 1 uppercase, 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* BUTTON */}
        <Button
        type="submit"
        className="h-11 w-full rounded-2xl bg-black text-white dark:bg-white dark:text-black">
          Create Account
        </Button>
      </Form>

      {/* FOOTER */}
      <p className="text-center text-sm text-neutral-500 mt-6">
        Already have an account?{" "}
        <Link href={'/login'} className="text-black dark:text-white font-medium cursor-pointer">
          Login
        </Link>
      </p>

    </div>
  </div>
);
};

export default SignupPage;