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
    <div className="w-11/12 mx-auto mt-5 columns-1 sm:columns-3 md:columns-4 lg:columns-6 gap-4 space-y-4">

      {posts.map((post) => (
        <div
          key={post._id}
          className="break-inside-avoid cursor-pointer rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-4"
        >
          {post.imageUrl && (
            <div className="relative w-full aspect-auto">
              <Image
                src={post.imageUrl}
                alt="Image"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default HomePage;