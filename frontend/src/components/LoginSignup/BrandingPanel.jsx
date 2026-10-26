
import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/24/outline";

function BrandingPanel({ data }) {
  return (
    <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-10 text-white lg:flex xl:p-12">
      {/* Decorative circles */}
      <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -right-10 top-40 h-44 w-44 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/5" />

      {/* Brand logo */}
      <Link to="/" className="relative z-10 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
          <SparklesIcon className="h-6 w-6" />
        </span>

        <span className="text-xl font-bold tracking-tight">
          {data.brandName}{" "}
          <span className="text-indigo-200">{data.brandSuffix}</span>
        </span>
      </Link>

      {/* Main content */}
      <div className="relative z-10 my-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-100">
          <SparklesIcon className="h-4 w-4" />
          {data.badge}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight xl:text-5xl">
          {data.heading[0]}
          <br />
          {data.heading[1]}
          <span className="text-indigo-200">.</span>
        </h1>

        <p className="mt-5 max-w-sm text-base leading-7 text-indigo-100">
          {data.description}
        </p>

        {/* Features list */}
        <div className="mt-9 space-y-4">
          {data.features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-white/90"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="relative z-10 text-xs text-indigo-200">
        {data.footer}
      </p>
    </section>
  );
}

export default BrandingPanel;
