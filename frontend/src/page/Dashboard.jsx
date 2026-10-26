import DashboardHeader from "../components/Dashboard/DashboardHeader";
import PromptPanel from "../components/Dashboard/PromptPanel";
import ProTip from "../components/Dashboard/ProTip";
import ResultsPanel from "../components/Dashboard/ResultPanel"
import DashboardFooter from "../components/Dashboard/DashboardFooter";
import { dashboardContent,examples } from "../data/dashboardData/dashboardData";
import useEmailGenerator from "../Hooks/useEmailGenrator.js"

const Dashboard = () => {
  const {
    prompt,
    setPrompt,
    loading,
    result,
    copied,
    handleGenerate,
    copyToClipboard,
  } = useEmailGenerator();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFF] via-white to-[#F1EDFF] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Welcome banner */}
        <DashboardHeader content={dashboardContent} />

        {/* Main workspace */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Prompt form and tip */}
          <div className="lg:col-span-4">
            <PromptPanel
              prompt={prompt}
              setPrompt={setPrompt}
              loading={loading}
              handleGenerate={handleGenerate}
              examples={examples}
              content={dashboardContent}
            />

            <ProTip content={dashboardContent} />
          </div>

          {/* Generated results */}
          <ResultsPanel
            result={result}
            copied={copied}
            copyToClipboard={copyToClipboard}
            content={dashboardContent}
          />
        </div>

        {/* Footer */}
        <DashboardFooter text={dashboardContent.footer} />
      </div>
    </main>
  );
};

export default Dashboard;
