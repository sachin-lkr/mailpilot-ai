import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const HistoryHeader = () => {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 px-6 py-8 shadow-xl shadow-indigo-200/50 sm:px-9 sm:py-10">
      <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
          <ClockIcon className="h-7 w-7 text-white" />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Your workspace
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Email History
          </h1>

          <p className="mt-2 text-sm leading-6 text-indigo-100">
            Find and reuse your previously generated emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoryHeader;