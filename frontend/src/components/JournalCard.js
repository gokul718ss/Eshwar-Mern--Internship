import React from 'react';

const JournalCard = ({ journal, onDelete }) => {
  return (
    <div className="journal-card">
      <h2>{journal.title}</h2>
      <p>{journal.content}</p>
      <button onClick={() => onDelete(journal.id)}>Delete</button>
    </div>
  );
};

export default JournalCard;