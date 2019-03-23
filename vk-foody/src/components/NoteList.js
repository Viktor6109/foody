import React from 'react';

const NoteList = ({ notes, onDeleteNote }) => (
  <ul>
    {notes.map(({ id, text }) => (
      <li key={id}>
        <button
          type="button"
          onClick={() => {
            onDeleteNote(id);
          }}
        >
          Удалить
        </button>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);
export default NoteList;
