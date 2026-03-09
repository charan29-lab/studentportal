export default function Announcements() {
  const announcements = [
    "Exam schedule released.",
    "Library closed on Friday.",
    "New courses available next semester.",
    "Submit assignments before deadline.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Announcements</h1>

      <ul className="space-y-3 w-full max-w-md">
        {announcements.map((a, i) => (
          <li key={i} className="bg-white p-4 rounded shadow">{a}</li>
        ))}
      </ul>
    </div>
  );
}