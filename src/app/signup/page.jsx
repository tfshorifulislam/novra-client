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

const SignupPage = () => {
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
        <Form className="flex flex-col gap-5">

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

          {/* DATE OF BIRTH */}
          <TextField isRequired name="dob" type="date">
            <Label>Date of Birth</Label>
            <Input className="mt-2" type="date" />
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
          <Button className="h-11 w-full rounded-2xl bg-black text-white dark:bg-white dark:text-black">
            Create Account
          </Button>
        </Form>

        {/* FOOTER */}
        <p className="text-center text-sm text-neutral-500 mt-6">
          Already have an account?{" "}
          <span className="text-black dark:text-white font-medium cursor-pointer">
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;