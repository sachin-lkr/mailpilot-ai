import { SparklesIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function PromptPanel({
  prompt,
  setPrompt,
  loading,
  handleGenerate,
  examples,
  content,
}) {
  return (
    <section className="lg:col-span-4">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <LightBulbIcon className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              {content.promptTitle}
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              {content.promptSubtitle}
            </p>
          </div>
        </div>

        <form onSubmit={handleGenerate}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <label
              htmlFor="email-prompt"
              className="text-sm font-semibold text-slate-700"
            >
              {content.textareaLabel}
            </label>

            <span
              className={`text-xs ${
                prompt.length >= 2000 ? "text-red-500" : "text-slate-400"
              }`}
            >
              {prompt.length}/2000
            </span>
          </div>

          <textarea
            id="email-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value.slice(0, 2000))}
            maxLength={2000}
            rows={9}
            required
            disabled={loading}
            placeholder={content.placeholder}
            className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 disabled:opacity-60"
          />

          <div className="mt-4">
            <p className="mb-3 text-xs font-semibold text-slate-500">
              TRY AN EXAMPLE
            </p>

            <div className="flex flex-wrap gap-2">
              {examples.map((example) => (
                <button
                  key={example.label}
                  type="button"
                  disabled={loading}
                  onClick={() => setPrompt(example.prompt)}
                  className="rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-xs font-medium text-indigo-700 transition hover:border-indigo-200 hover:bg-indigo-100 disabled:opacity-50"
                >
                  {example.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Generating your emails...
              </>
            ) : (
              <>
                <SparklesIcon className="h-5 w-5" />
                Generate with AI
              </>
            )}
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-slate-400">
            Review AI-generated content before sending it.
          </p>
        </form>
      </div>
    </section>
  );
}
