
import {
  SparklesIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// Example prompts shown below the textarea
export const examples = [
  {
    label: "Job application",
    prompt:
      "Write a professional cold email to a recruiter for a MERN Stack Developer fresher role. My skills include React, Node.js, Express.js, MongoDB, and REST APIs. Keep it natural, short, and professional.",
  },
  {
    label: "Client outreach",
    prompt:
      "Write a friendly outreach email to a potential client offering web development services using React and Node.js. Explain how I can help improve their website.",
  },
  {
    label: "Follow-up",
    prompt:
      "Write a polite follow-up email to a recruiter after applying for a Junior React Developer position. Keep it short, professional, and friendly.",
  },
];

// Information used to render each generated result card
export const outputTypes = [
  {
    key: "subject",
    title: "Subject Line",
    description: "A clear subject to get attention",
    icon: EnvelopeIcon,
    badge: "SUBJECT",
  },
  {
    key: "emailBody",
    title: "Cold Email",
    description: "Your ready-to-send email",
    icon: PaperAirplaneIcon,
    badge: "EMAIL",
  },
  {
    key: "linkedInDM",
    title: "LinkedIn Message",
    description: "A professional networking message",
    icon: ChatBubbleLeftRightIcon,
    badge: "LINKEDIN",
  },
  {
    key: "followUpEmail",
    title: "Follow-up Email",
    description: "A polite message to follow up",
    icon: ArrowPathIcon,
    badge: "FOLLOW-UP",
  },
];

export const dashboardContent = {
  badge: "Your AI writing assistant",
  heading: "Turn your ideas into",
  headingHighlight: "emails that connect.",
  description:
    "Create professional emails, LinkedIn messages, and follow-ups in seconds. Just tell MailPilot what you need.",
  promptTitle: "Create new email",
  promptSubtitle: "Tell us what you want to write",
  textareaLabel: "Your instructions",
  placeholder:
    "Example: Write a cold email to a recruiter for a MERN Stack Developer fresher role...",
  proTipTitle: "Pro tip",
  proTipDescription:
    "Include your goal, recipient, skills, and preferred tone to get more useful results.",
  resultsTitle: "Your generated content",
  emptyTitle: "Ready when you are!",
  emptyDescription:
    "Enter your instructions on the left and click Generate with AI. MailPilot will prepare your email content here.",
  footer: "Made for better conversations with MailPilot AI",
};
