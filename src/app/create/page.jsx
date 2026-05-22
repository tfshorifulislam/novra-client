"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { FiImage } from "react-icons/fi";

const PostCreatePage = () => {
  const fileRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  const handleClear = () => {
    setText("");
    setPreview("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  // 🔥 prevents hydration mismatch completely
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <form className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 shadow-sm">

        <h1 className="text-lg font-semibold mb-4">
          Create Post
        </h1>

        {/* TEXTAREA */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="
            w-full resize-none
            min-h-[160px]
            p-4
            rounded-2xl
            border border-neutral-200 dark:border-neutral-800
            bg-neutral-50 dark:bg-neutral-900
            text-sm sm:text-base
            outline-none
            focus:min-h-[220px]
            transition-all
          "
        />

        {/* PREVIEW */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="preview"
              className="w-full max-h-[320px] object-cover rounded-2xl border"
            />
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
            >
              <FiImage size={20} />
              <span className="text-sm font-medium">Image</span>
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </div>

          <div className="flex gap-3">

            <Button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 rounded-xl bg-neutral-200 dark:bg-neutral-800"
            >
              Clear
            </Button>

            <Button
              disabled={!text.trim()}
              className="px-6 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"
            >
              Post
            </Button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCreatePage;