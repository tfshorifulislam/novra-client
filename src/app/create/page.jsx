"use client";

import { useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { FiImage, FiX } from "react-icons/fi";

export default function PostCreatePage() {
  const fileRef = useRef(null);

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  if (isPending) return null;

  // IMAGE SELECT
  const handleImage = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  // RESET
  const reset = () => {
    setText("");
    setFile(null);
    setPreview("");
    if (fileRef.current) fileRef.current.value = "";
  };

  // CREATE POST
  const handlePost = async () => {
    if (!text.trim() && !file) return;

    try {
      setLoading(true);

      let imageUrl = "";

      // 1️⃣ upload image first
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const uploadRes = await fetch(`http://localhost:5000/upload`, {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        imageUrl = uploadData?.imageUrl || "";
      }

      // 2️⃣ send post with user info
      const postPayload = {
        text,
        imageUrl,

        user: {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          image: user?.image,
        },
      };

      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postPayload),
      });

      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="rounded-3xl border p-5 bg-white dark:bg-neutral-950">

        <div className="flex gap-4">

          <Avatar src={user?.image} className="h-11 w-11" />

          <div className="flex-1">

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`What's on your mind, ${user?.name}?`}
              className="w-full min-h-[120px] outline-none bg-transparent"
            />

            {/* preview */}
            {preview && (
              <div className="relative mt-3">
                <img
                  src={preview}
                  className="rounded-2xl max-h-[400px] w-full object-cover"
                />

                <button
                  onClick={() => setPreview("")}
                  className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full"
                >
                  <FiX />
                </button>
              </div>
            )}

            {/* actions */}
            <div className="mt-4 flex justify-between border-t pt-4">

              <button
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 text-sm"
              >
                <FiImage /> Image
              </button>

              <input
                ref={fileRef}
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />

              <Button
                onClick={handlePost}
                isDisabled={loading}
              >
                {loading ? "Posting..." : "Post"}
              </Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}