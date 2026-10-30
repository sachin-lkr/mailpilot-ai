import React from "react";
import { NavLink } from "react-router-dom";
import {HomeIcon,ClockIcon,SparklesIcon, ChevronRightIcon,} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  // Sidebar navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: HomeIcon,
      end: true,
    },
    {
      name: "History",
      path: "/dashboard/history",
      icon: ClockIcon,
    },
  ];
  const navigate = useNavigate();
  const navigateHomePage =()=>{
     navigate("/");
  }

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200/80 bg-white md:flex">
      {/* Brand header */}
      <div onClick={navigateHomePage} className="flex h-20 items-center gap-3 border-b border-slate-100 px-6 cursor-pointer">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200">
          <SparklesIcon className="h-6 w-6 text-white" />
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800">
            MailPilot <span className="text-indigo-600">AI</span>
          </h1>
          <p className="text-xs text-slate-400">
            Smart email assistant
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-7">
        <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Workspace
        </p>

        {navItems.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={name}
            to={path}
            end={end}
            className={({ isActive }) =>
              `group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-3">
                  <Icon
                    className={`h-5 w-5 ${
                      isActive
                        ? "text-indigo-600"
                        : "text-slate-400 group-hover:text-indigo-500"
                    }`}
                  />

                  <span className="text-sm font-semibold">
                    {name}
                  </span>
                </span>

                {isActive && (
                  <ChevronRightIcon className="h-4 w-4 text-indigo-500" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom info card */}
      <div className="border-t border-slate-100 p-4">
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-4">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
            <SparklesIcon className="h-4 w-4 text-indigo-600" />
          </div>

          <h2 className="text-sm font-bold text-slate-800">
            Write smarter
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Create emails and outreach messages with AI.
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          MailPilot AI · Built with MERN
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;