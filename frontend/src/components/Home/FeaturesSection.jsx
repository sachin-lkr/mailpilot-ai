import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI-Powered Email Writing",
    description:
      "Turn a simple prompt into a personalized, professional email ready for your next opportunity.",
    icon: EnvelopeIcon,
    number: "01",
  },
  {
    title: "Multi-Channel Outreach",
    description:
      "Get your main email, a LinkedIn message, and a follow-up email in one workflow.",
    icon: ChatBubbleLeftRightIcon,
    number: "02",
  },
  {
    title: "Ready to Copy & Use",
    description:
      "Review your messages, make edits, and copy the content you need for your outreach.",
    icon: ClipboardDocumentIcon,
    number: "03",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="how-it-works"
      className="border-y border-slate-100 bg-slate-50/70 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            A simpler workflow
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            From a simple prompt to{" "}
            <span className="text-indigo-600">ready-to-use messages.</span>
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Spend less time drafting and more time applying, connecting,
            and following up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;