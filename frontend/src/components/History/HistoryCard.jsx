import React from "react";
import { ClockIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import HistoryContent from "./HistoryContent.jsx";

const HistoryCard = ({ item, id, isSelected, onToggle,  formatDate, copiedId, onCopy,}) => {
  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100">
          <EnvelopeIcon className="h-5 w-5 text-indigo-600" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-words font-semibold text-slate-800">
            {item.subject || "Untitled email"}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            <ClockIcon className="mr-1 inline h-4 w-4" />
            {formatDate(item.createdAt)}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
        >
          {isSelected ? "Hide" : "View"}
        </button>
      </div>

      <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-indigo-500">
          Original prompt
        </p>

        <p className="line-clamp-3 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
          {item.prompt || "No prompt available"}
        </p>
      </div>

      {isSelected && (
        <HistoryContent
          item={item}
          id={id}
          copiedId={copiedId}
          onCopy={onCopy}
        />
      )}
    </article>
  );
};

export default HistoryCard;
