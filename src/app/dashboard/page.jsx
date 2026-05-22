"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
    FiHeart,
    FiMessageCircle,
    FiBookmark,
    FiMoreHorizontal,
} from "react-icons/fi";

const dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState(new Set());

    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    const toggleLike = (id) => {
        setLikedPosts((prev) => {
            const updated = new Set(prev);

            updated.has(id)
                ? updated.delete(id)
                : updated.add(id);

            return updated;
        });
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">

            {posts.map((post, index) => {
                const liked = likedPosts.has(post._id);

                return (
                    <div key={post._id}>

                        <article className="bg-white dark:bg-neutral-950 rounded-xl">

                            {/* HEADER */}
                            <div className="flex items-center justify-between p-4">

                                <div className="flex items-center gap-3">

                                    <div className="relative h-11 w-11 overflow-hidden rounded-full">
                                        <Image
                                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                            alt="user"
                                            fill
                                            sizes="44px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
                                            Tf Shoriful Islam
                                        </h2>

                                        <p className="text-xs text-neutral-500">
                                            {formatDate(post.createdAt)}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className="
                    p-2 rounded-full
                    hover:bg-neutral-100
                    dark:hover:bg-neutral-900
                    transition
                  "
                                >
                                    <FiMoreHorizontal className="text-[18px]" />
                                </button>
                            </div>

                            {/* TEXT */}
                            {post.text && (
                                <div className="px-4 pb-4">
                                    <p
                                        className="
                      whitespace-pre-line
                      text-[15px]
                      leading-7
                      text-neutral-800 dark:text-neutral-200
                    "
                                    >
                                        {post.text}
                                    </p>
                                </div>
                            )}

                            {/* IMAGE */}
                            {post.imageUrl && (
                                <div className="relative w-full px-4">
                                    <Image
                                        src={post.imageUrl}
                                        alt="post"
                                        width={1200}
                                        height={1200}
                                        unoptimized
                                        className="
                      w-full
                      h-auto
                      rounded-2xl
                      object-cover
                    "
                                    />
                                </div>
                            )}

                            {/* ACTIONS */}
                            <div className="flex items-center justify-between px-2 py-2 mt-2">

                                <div className="flex items-center">

                                    {/* LIKE */}
                                    <button
                                        onClick={() => toggleLike(post._id)}
                                        className="
                      p-3 rounded-full
                      hover:bg-neutral-100
                      dark:hover:bg-neutral-900
                      transition
                    "
                                    >
                                        <FiHeart
                                            className={`
                        text-[21px]
                        transition
                        ${liked
                                                    ? "fill-red-500 text-red-500"
                                                    : "text-neutral-700 dark:text-neutral-300"
                                                }
                      `}
                                        />
                                    </button>

                                    {/* COMMENT */}
                                    <button
                                        className="
                      p-3 rounded-full
                      hover:bg-neutral-100
                      dark:hover:bg-neutral-900
                      transition
                    "
                                    >
                                        <FiMessageCircle className="text-[21px] text-neutral-700 dark:text-neutral-300" />
                                    </button>
                                </div>

                                {/* SAVE */}
                                <button
                                    className="
                    p-3 rounded-full
                    hover:bg-neutral-100
                    dark:hover:bg-neutral-900
                    transition
                  "
                                >
                                    <FiBookmark className="text-[20px] text-neutral-700 dark:text-neutral-300" />
                                </button>
                            </div>
                        </article>

                        {/* SEPARATOR */}
                        {index !== posts.length - 1 && (
                            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-6" />
                        )}

                    </div>
                );
            })}
        </div>
    );
};

export default dashboard;