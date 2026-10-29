import React from "react";
import { ClipboardDocumentIcon,  CheckIcon} from "@heroicons/react/24/outline";

const sections = [
  { label: "Email Body", key: "emailBody" },
  { label: "LinkedIn Message", key: "linkedInDM" },
  { label: "Follow-up Email", key: "followUpEmail" },
];

const HistoryContent = ({ item, id, copiedId, onCopy }) => {
  return (
    <div className="mt-4 space-y-4">
      {sections.map(({ label, key }) => (
        <div
          key={key}
          className="rounded-xl border border-slate-100 p-4"
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold text-slate-700">
              {label}
            </h4>

            <button
              type="button"
              onClick={() => onCopy(item[key], `${id}-${key}`)}
              disabled={!item[key]}
              className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-violet-700 disabled:opacity-40"
            >
              {copiedId === `${id}-${key}` ? (
                <CheckIcon className="h-4 w-4 text-emerald-500" />
              ) : (
                <ClipboardDocumentIcon className="h-4 w-4" />
              )}

              {copiedId === `${id}-${key}` ? "Copied" : "Copy"}
            </button>
          </div>

          <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
            {item[key] || "No content available"}
          </p>
        </div>
      ))}

      <button
        type="button"
        onClick={() => onCopy(item.subject, `${id}-subject`)}
        disabled={!item.subject}
        className="rounded-xl border border-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 disabled:opacity-40"
      >
        {copiedId === `${id}-subject` ? "Copied!" : "Copy subject"}
      </button>
    </div>
  );
};

export default HistoryContent;