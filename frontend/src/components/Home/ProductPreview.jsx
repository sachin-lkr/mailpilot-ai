import {
  SparklesIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  ClipboardDocumentIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const ProductPreview = () => {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Background glow */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/60 to-violet-200/60 blur-2xl" />

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-indigo-950/10">

        {/* Preview header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <SparklesIcon className="h-5 w-5" />
            </div>

            <div>
              <p className="font-bold">AI Email Workspace</p>
              <p className="text-xs text-slate-500">Example preview</p>
            </div>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Ready to use
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            Your prompt
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            Write a professional cold email to a recruiter for a MERN Stack
            Developer job. I am a fresher with React, Node.js, Express and
            MongoDB skills.
          </div>

          {/* Three output formats */}
          <div className="mb-4 mt-6 grid grid-cols-3 gap-2">
            {[
              { label: "Email", Icon: EnvelopeIcon, active: true },
              {
                label: "LinkedIn DM",
                Icon: ChatBubbleLeftRightIcon,
                active: false,
              },
              {
                label: "Follow-up",
                Icon: PaperAirplaneIcon,
                active: false,
              },
            ].map(({ label, Icon, active }) => (
              <div
                key={label}
                className={`rounded-xl border p-3 text-center ${
                  active
                    ? "border-indigo-200 bg-indigo-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Icon
                  className={`mx-auto mb-2 h-5 w-5 ${
                    active ? "text-indigo-600" : "text-slate-500"
                  }`}
                />
                <p
                  className={`text-xs font-semibold ${
                    active ? "text-indigo-700" : "text-slate-600"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Sample email */}
          <div className="rounded-2xl border border-slate-200 p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold">Professional Email</p>
              <span className="text-xs text-slate-400">Sample</span>
            </div>

            <p className="text-xs font-semibold text-slate-500">SUBJECT</p>

            <p className="mt-1 text-sm font-bold leading-6 text-slate-800">
              Application for MERN Stack Developer Opportunity
            </p>

            <div className="my-4 border-t border-slate-100" />

            <p className="text-sm leading-6 text-slate-600">
              Dear Hiring Team,
              <br /><br />
              I am reaching out to express my interest in a MERN Stack
              Developer opportunity. I have been learning and building
              projects using React, Node.js, Express.js, and MongoDB.
              I would welcome the opportunity to discuss how my skills
              could contribute to your team.
              <br /><br />
              Best regards,
              <br />
              [Your Name]
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <span className="text-xs text-slate-500">
                Personalized starting point
              </span>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                <ClipboardDocumentIcon className="h-4 w-4" />
                Copy-ready
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-max items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 text-xs font-medium text-slate-500 shadow-lg">
        <DocumentTextIcon className="h-4 w-4 text-indigo-600" />
        One prompt. Three outreach formats.
      </div>
    </div>
  );
};

export default ProductPreview;