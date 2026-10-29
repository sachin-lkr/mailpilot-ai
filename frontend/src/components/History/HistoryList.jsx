import React from "react";
import HistoryCard from "./HistoryCard.jsx";

const HistoryList = ({ history,selectedEmail, setSelectedEmail,formatDate, copiedId, handleCopy,}) => {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {history.map((item, index) => {
        const id = item._id || item.id || index;

        return (
          <HistoryCard
            key={id}
            item={item}
            id={id}
            isSelected={selectedEmail === id}
            onToggle={() =>
              setSelectedEmail(selectedEmail === id ? null : id)
            }
            formatDate={formatDate}
            copiedId={copiedId}
            onCopy={handleCopy}
          />
        );
      })}
    </section>
  );
};

export default HistoryList;