import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import ProductPreview from "./ProductPreview";

const HeroSection = ({ dashboardPath }) => {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-gradient-to-b from-indigo-50 via-violet-50/50 to-white" />

      <div className="absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-10">

        {/* Hero content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
            <SparklesIcon className="h-4 w-4" />
            Less writing. More opportunities.
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Your next opportunity starts with a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              better email.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Describe your goal in simple words. MailPilot AI helps you create
            professional emails, LinkedIn messages, and follow-ups without
            starting from a blank page.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to={dashboardPath}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-xl shadow-indigo-500/25 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Generate Your First Email
              <ArrowRightIcon className="h-5 w-5" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <CheckBadgeIcon className="h-5 w-5 text-emerald-600" />
              Easy to personalize
            </span>

            <span className="inline-flex items-center gap-2">
              <BoltIcon className="h-5 w-5 text-amber-500" />
              Three message formats
            </span>
          </div>
        </div>

        {/* Separate reusable preview */}
        <ProductPreview />
      </div>
    </section>
  );
};

export default HeroSection;