"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-5 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">

      {posts.map((post) => (
        <div
          key={post._id}
          className="break-inside-avoid rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-4"
        >
          {post.text && (
            <p className="p-3 text-sm text-neutral-800 dark:text-neutral-200">
              {post.text}
            </p>
          )}

          {post.imageUrl && (
  <div className="relative w-full aspect-auto">

    <Image
      src={post.imageUrl}
      alt="post"
      width={800}
      height={800}
      className="w-full h-auto object-cover"
      unoptimized
    />

  </div>
)}
        </div>
      ))}

    </div>
  );
};

export default HomePage;