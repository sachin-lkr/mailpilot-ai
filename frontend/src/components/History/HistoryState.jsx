import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const HistoryState = ({ type, search, onRetry }) => {
  if (type === "loading") {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />

        <p className="mt-4 text-sm text-slate-500">
          Loading your email history...
        </p>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="rounded-2xl border border-red-100 bg-white px-6 py-12 text-center">
        <h3 className="font-semibold text-slate-800">
          Could not load your history
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Please check your connection and try again.
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-white/80 px-6 py-12 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100">
        <EnvelopeIcon className="h-8 w-8 text-indigo-600" />
      </div>

      <h3 className="text-lg font-bold text-slate-800">
        {search ? "No emails found" : "No email history yet"}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {search
          ? "Try a different search term."
          : "Generate your first email from the dashboard. Your saved emails will appear here."}
      </p>
    </div>
  );
};

export default HistoryState;