"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-bold">404</h1>

            <p className="mt-3 text-neutral-500">
                Oops! The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 px-5 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90 transition"
            >
                Go Home
            </Link>
        </div>
    );
}