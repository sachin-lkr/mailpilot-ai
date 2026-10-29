import React from "react";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const HistoryToolbar = ({total,search,setSearch,onRefresh,loading,}) => {
  return (
    <section className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Saved emails
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {total} saved {total === 1 ? "email" : "emails"}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative sm:w-72">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search emails..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-100 px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 disabled:opacity-50"
          >
            <ArrowPathIcon className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoryToolbar;