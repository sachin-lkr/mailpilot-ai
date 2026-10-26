
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function ProTip({ content }) {
  return (
    <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
      <div className="flex items-start gap-3">
        <SparklesIcon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />

        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            {content.proTipTitle}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {content.proTipDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
