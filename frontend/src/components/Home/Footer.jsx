import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link to="/" className="text-lg font-extrabold tracking-tight">
          MailPilot <span className="text-indigo-600">AI</span>
        </Link>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MailPilot AI. Built to make outreach easier.
        </p>

        <Link
          to="/login"
          className="text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          Your workspace →
        </Link>
      </div>
    </footer>
  );
};

export default Footer;