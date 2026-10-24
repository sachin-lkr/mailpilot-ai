import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const CTASection = ({ dashboardPath }) => {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center sm:px-12 sm:py-20">

        {/* Decorative background */}
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-indigo-300">
            <SparklesIcon className="h-7 w-7" />
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Your next message can open a new door.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            Start with your skills, your goal, and a simple prompt.
            Let MailPilot AI help you draft your next outreach message.
          </p>

          <Link
            to={dashboardPath}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-indigo-50"
          >
            Try MailPilot AI
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;