
import React from "react";
import { useAuth } from "../context/AuthContext";
import { LogOut, Sparkles, UserRound, ChevronDown,} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  // Show user's initial in the avatar
  const userInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">

      {/* Left section: Welcome message */}
      <div className="min-w-0">
        <div className="hidden items-center gap-2 md:flex">
          <h1 className="truncate text-base font-bold text-slate-800">
            Welcome back, {user?.name || "User"}
          </h1>

          <Sparkles className="h-4 w-4 shrink-0 text-indigo-500" />
        </div>

        <p className="hidden text-xs text-slate-500 md:block">
          Ready to create emails that connect?
        </p>

        {/* Mobile brand */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-sm shadow-indigo-200">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-sm font-bold text-slate-800">
              MailPilot <span className="text-indigo-600">AI</span>
            </h1>
            <p className="text-[10px] text-slate-400">
              Smart email assistant
            </p>
          </div>
        </div>
      </div>

      {/* Right section: User profile and logout */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">

        {/* User profile */}
        <div className="hidden items-center gap-3 border-r border-slate-200 pr-4 sm:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 text-sm font-bold text-indigo-700 ring-2 ring-white">
            {userInitial}
          </div>

          <div className="max-w-36">
            <p className="truncate text-sm font-semibold text-slate-800">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-slate-500">
              Workspace member
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>

        {/* Logout button */}
        <button
          type="button"
          onClick={handleLogout}
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 sm:px-4"
          aria-label="Logout"
          title="Logout from your account"
        >
          <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />

          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
