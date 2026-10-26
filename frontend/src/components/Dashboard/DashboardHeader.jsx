import { SparklesIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function DashboardHeader({ content }) {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 px-6 py-8 shadow-xl shadow-indigo-200/50 sm:px-9 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-50 backdrop-blur-sm">
            <SparklesIcon className="h-4 w-4" />
            {content.badge}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {content.heading}
            <span className="block text-indigo-200">
              {content.headingHighlight}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base sm:leading-7">
            {content.description}
          </p>
        </div>

        <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-inner backdrop-blur-md sm:flex">
          <EnvelopeIcon className="h-12 w-12 text-white" />
        </div>
      </div>
    </section>
  );
}
