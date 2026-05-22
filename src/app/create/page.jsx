"use client";

import React, { useRef, useState } from "react";
import { Button } from "@heroui/react";
import { FiImage } from "react-icons/fi";

const PostCreatePage = () => {
  const fileRef = useRef(null);

  const [text, setText] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // IMAGE SELECT
  const handleImage = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // RESET
  const resetForm = () => {
    setText("");
    setPreview(null);
    setFile(null);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  // POST
  const handlePost = async () => {
    if (!text.trim() && !file) return;

    try {
      setLoading(true);

      let imageUrl = "";

      // upload image
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        imageUrl = data?.imageUrl || "";
      }

      // create post
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          imageUrl,
        }),
      });

      resetForm();
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">

        {/* TEXT */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full min-h-[140px] resize-none rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 text-sm outline-none"
        />

        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="preview"
              className="w-full max-h-[320px] object-cover rounded-xl"
            />
          </div>
        )}

        {/* ACTIONS */}
        <div className="mt-5 flex items-center justify-between">

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
          >
            <FiImage size={18} />
            Image
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />

          <div className="flex gap-2">

            <Button
              type="button"
              onClick={resetForm}
              className="rounded-xl bg-neutral-200 dark:bg-neutral-800 px-4"
            >
              Clear
            </Button>

            <Button
              type="button"
              onClick={handlePost}
              disabled={loading || (!text.trim() && !file)}
              className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-6"
            >
              {loading ? "Posting..." : "Post"}
            </Button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PostCreatePage;