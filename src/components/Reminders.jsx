import { useState } from "react";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [text, setText] = useState("");

  const addReminder = () => {
    if (text.trim() !== "") {
      setReminders([...reminders, text]);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Reminders</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a reminder"
          className="p-2 border rounded"
        />
        <button onClick={addReminder} className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2 w-full max-w-md">
        {reminders.map((r, i) => (
          <li key={i} className="bg-white p-3 rounded shadow">{r}</li>
        ))}
      </ul>
    </div>
  );
}