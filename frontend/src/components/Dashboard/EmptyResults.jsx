import {
  SparklesIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function EmptyResults({ content }) {
  return (
    <div className="flex min-h-[440px] flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-white/80 px-6 py-12 text-center shadow-sm">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100">
        <SparklesIcon className="h-10 w-10 text-indigo-600" />
      </div>

      <h3 className="text-lg font-bold text-slate-800">{content.emptyTitle}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {content.emptyDescription}
      </p>

      <div className="mt-7 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left">
          <EnvelopeIcon className="h-5 w-5 shrink-0 text-indigo-500" />
          <span className="text-xs font-medium text-slate-600">
            Professional emails
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left">
          <ChatBubbleLeftRightIcon className="h-5 w-5 shrink-0 text-violet-500" />
          <span className="text-xs font-medium text-slate-600">
            LinkedIn messages
          </span>
        </div>
      </div>
    </div>
  );
}
