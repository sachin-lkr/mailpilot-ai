import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../utils/api.js";

import HistoryHeader from "../components/History/HistoryHeader.jsx";
import HistoryToolbar from "../components/History/HistoryToolbar.jsx";
import HistoryList from "../components/History/HistoryList.jsx";
import HistoryState from "../components/History/HistoryState.jsx";

const History = () => {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [copiedId, setCopiedId] = useState("");

  // Fetch saved email history from the backend
  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError(false);

      const { data } = await api.get("/ai/history");

      const records = Array.isArray(data) ? data : data.history;

      if (!Array.isArray(records)) {
        throw new Error("Invalid history response");
      }

      setHistory(records);
    } catch (err) {
      setError(true);

      toast.error(
        err.response?.data?.message || "Unable to load email history."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Search by prompt or email subject
  const filteredHistory = history.filter((item) => {
    const query = search.toLowerCase();

    return (
      (item.prompt || "").toLowerCase().includes(query) ||
      (item.subject || "").toLowerCase().includes(query)
    );
  });

  // Copy text to clipboard
  const handleCopy = async (text, id) => {
    if (!text) {
      toast.error("No content available to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success("Copied to clipboard!");

      setTimeout(() => setCopiedId(""), 2000);
    } catch {
      toast.error("Unable to copy content.");
    }
  };

  // Format the date for display
  const formatDate = (date) => {
    if (!date) return "Date unavailable";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Date unavailable";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFF] via-white to-[#F1EDFF] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HistoryHeader />

        <HistoryToolbar
          total={history.length}
          search={search}
          setSearch={setSearch}
          onRefresh={fetchHistory}
          loading={loading}
        />

        {loading ? (
          <HistoryState type="loading" />
        ) : error ? (
          <HistoryState type="error" onRetry={fetchHistory} />
        ) : filteredHistory.length === 0 ? (
          <HistoryState type="empty" search={search} />
        ) : (
          <HistoryList
            history={filteredHistory}
            selectedEmail={selectedEmail}
            setSelectedEmail={setSelectedEmail}
            formatDate={formatDate}
            copiedId={copiedId}
            handleCopy={handleCopy}
          />
        )}
      </div>
    </main>
  );
};

export default History;