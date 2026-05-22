"use client";

import Image from "next/image";

import {
  Button,
  FieldError,
  TextArea,
  TextField,
} from "@heroui/react";

import {
  FiImage,
  FiPaperclip,
  FiSmile,
} from "react-icons/fi";

const HomePagePostWrite = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-3 sm:px-0">

      {/* CARD */}
      <div className="rounded-[32px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden">

        <div className="p-4 sm:p-5">

          <div className="flex items-start gap-3">

            {/* AVATAR */}
            <div className="shrink-0">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1">

              <form className="space-y-4">

                {/* TEXTAREA */}
                <TextField
                  isRequired
                  name="description"
                  className="w-full"
                >
                  <div className="w-full">

                    <TextArea
                      placeholder="What are you working on?"
                      minRows={1}
                      maxRows={10}
                      className="w-full"
                      classNames={{
                        inputWrapper: `
                          bg-transparent
                          shadow-none
                          border-0
                          px-0
                          py-0
                          rounded-none
                          min-h-[48px]

                          data-[focus=true]:shadow-none
                          data-[focus=true]:bg-transparent
                        `,
                        input: `
                          text-[16px]
                          sm:text-[17px]
                          leading-8
                          text-black
                          dark:text-white
                          placeholder:text-neutral-400
                          dark:placeholder:text-neutral-500
                          p-0
                        `,
                        innerWrapper: "items-start",
                      }}
                    />

                    <FieldError className="mt-1 text-sm text-red-500" />
                  </div>
                </TextField>

                {/* ACTIONS */}
                <div className="flex items-center justify-between gap-3 pt-1">

                  {/* LEFT */}
                  <div className="flex items-center gap-1">

                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                      <FiImage size={18} />
                    </button>

                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                      <FiPaperclip size={18} />
                    </button>

                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                      <FiSmile size={18} />
                    </button>

                  </div>

                  {/* POST BUTTON */}
                  <Button
                    radius="full"
                    className="
                      h-10
                      px-5
                      text-sm
                      font-semibold
                      bg-black
                      text-white
                      hover:opacity-90
                      dark:bg-white
                      dark:text-black
                    "
                  >
                    Post
                  </Button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePagePostWrite;