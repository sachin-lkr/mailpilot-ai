import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ user }) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Brand logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xl font-extrabold tracking-tight">
              MailPilot <span className="text-indigo-600">AI</span>
            </p>
            <p className="hidden text-[10px] font-semibold tracking-[0.16em] text-slate-500 sm:block">
              YOUR OUTREACH COPILOT
            </p>
          </div>
        </Link>

        {/* Authentication-based navigation */}
        <div className="flex items-center gap-3 sm:gap-5">
          {user ? (
            <Link
              to="/dashboard"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Dashboard →
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-2 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 sm:px-3"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:px-5"
              >
                Get Started
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;