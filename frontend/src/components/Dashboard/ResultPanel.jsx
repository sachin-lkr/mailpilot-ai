import { CheckIcon } from "@heroicons/react/24/outline";
import { outputTypes } from "../../data/dashboardData/dashboardData.js";
import ResultCard from "./ResultCard";
import EmptyResults from "./EmptyResults";

export default function ResultsPanel({
  result,
  copied,
  copyToClipboard,
  content,
}) {
  return (
    <section className="lg:col-span-8">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {content.resultsTitle}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {result
              ? "Your content is ready. Copy any section you need."
              : "Your emails and messages will appear here."}
          </p>
        </div>

        {result && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <CheckIcon className="h-4 w-4" />
            Generation complete
          </span>
        )}
      </div>

      {result ? (
        <div className="grid grid-cols-1 gap-5">
          {outputTypes.map((item) => (
            <ResultCard
              key={item.key}
              item={item}
              content={result[item.key]}
              copied={copied}
              onCopy={copyToClipboard}
            />
          ))}
        </div>
      ) : (
        <EmptyResults content={content} />
      )}
    </section>
  );
}
