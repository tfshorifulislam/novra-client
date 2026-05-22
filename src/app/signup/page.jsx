"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // IMAGE
  const handleImage = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // SIGNUP
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.currentTarget);

      const user = Object.fromEntries(formData.entries());

      let imageUrl = "";

      // upload image
      if (file) {
        const imageData = new FormData();

        imageData.append("image", file);

        const res = await fetch(
          "http://localhost:5000/upload",
          {
            method: "POST",
            body: imageData,
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        imageUrl = data.imageUrl;
      }

      // create account
      const { data, error } =
        await authClient.signUp.email({
          name: user.name,
          email: user.email,
          password: user.password,
          image: imageUrl,
        });

      if (error) {
        return toast.error(error.message);
      }

      if (data) {
        toast.success(`Welcome ${user.name}!`);
        window.location.href = "/";
      }

    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-neutral-950">

      <div className="w-full max-w-md rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Create account
          </h1>

          <p className="mt-1 text-sm text-neutral-500">
            Sign up to get started
          </p>
        </div>

        {/* FORM */}
        <Form
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
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
            validate={(value) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Enter a valid email"
                : null
            }
          >
            <Label>Email</Label>
            <Input className="mt-2" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* IMAGE */}
          <div>
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="mt-2 block w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-2 text-sm"
            />

            {preview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={preview}
                  alt="preview"
                  className="h-20 w-20 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
                />
              </div>
            )}
          </div>

          {/* PASSWORD */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Minimum 8 characters required";
              }

              if (!/[A-Z]/.test(value)) {
                return "Add 1 uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Add 1 number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input
              className="mt-2"
              placeholder="Create password"
            />

            <Description className="mt-1 text-xs">
              8+ chars, 1 uppercase, 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* SUBMIT */}
          <Button
            type="submit"
            isDisabled={loading}
            className="h-11 w-full rounded-2xl bg-black text-white dark:bg-white dark:text-black"
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </Form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />

          <span className="text-xs uppercase tracking-[2px] text-neutral-400">
            OR
          </span>

          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* GOOGLE */}
        <button
          onClick={handleGoogleLogin}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-white"
        >
          <FcGoogle className="text-xl" />

          Continue with Google
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}

          <Link
            href="/login"
            className="font-medium text-black dark:text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}