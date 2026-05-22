export default function Loading() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200 blur-3xl dark:bg-neutral-900" />
      </div>

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e520_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e520_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#26262640_1px,transparent_1px),linear-gradient(to_bottom,#26262640_1px,transparent_1px)]" />

      {/* Main Loader */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Rings */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-40 w-40 animate-ping rounded-full border border-neutral-300 dark:border-neutral-700 opacity-20" />

          <div className="absolute h-28 w-28 animate-spin rounded-full border-[3px] border-neutral-300 border-t-black dark:border-neutral-800 dark:border-t-white" />

          <div className="absolute h-16 w-16 animate-spin rounded-full border-[3px] border-neutral-200 border-b-black dark:border-neutral-700 dark:border-b-white [animation-direction:reverse]" />

          {/* Center Logo */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="h-3 w-3 animate-pulse rounded-full bg-black dark:bg-white" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            Loading Novra
          </h1>

          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Preparing your experience...
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-black dark:bg-white" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-black dark:bg-white [animation-delay:0.2s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-black dark:bg-white [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}
