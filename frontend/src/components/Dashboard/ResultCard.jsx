import {ClipboardDocumentIcon,CheckIcon,} from "@heroicons/react/24/outline";

export default function ResultCard({ item, content, copied, onCopy }) {
  const Icon = item.icon;

  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600">
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <span className="mb-1 inline-block text-[10px] font-bold tracking-[0.16em] text-indigo-500">
              {item.badge}
            </span>

            <h3 className="text-base font-semibold text-slate-800">
              {item.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {item.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(content, item.key)}
          disabled={!content}
          title={copied === item.key ? "Copied" : "Copy content"}
          aria-label={`Copy ${item.title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied === item.key ? (
            <CheckIcon className="h-5 w-5 text-emerald-500" />
          ) : (
            <ClipboardDocumentIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5">
        {content ? (
          <p className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-600">
            {content}
          </p>
        ) : (
          <p className="text-sm text-slate-400">
            No content was returned for this section.
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-400">
          AI-generated content
        </span>

        <button
          type="button"
          onClick={() => onCopy(content, item.key)}
          disabled={!content}
          className="text-xs font-semibold text-indigo-600 transition hover:text-violet-700 disabled:opacity-40"
        >
          {copied === item.key ? "Copied!" : "Copy text"}
        </button>
      </div>
    </article>
  );
}
