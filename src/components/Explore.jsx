import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  const buttons = [
    { name: "Certificates", icon: "📄", path: "/certificates" },
    { name: "Courses", icon: "📚", path: "/courses" },
    { name: "Add Reminder", icon: "⏰", path: "/reminders" },
    { name: "Announcements", icon: "📢", path: "/announcements" },
    { name: "Random Stuff", icon: "🎯", path: "#" },
    { name: "Fun Activities", icon: "🎉", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Student Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {buttons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => btn.path !== "#" && navigate(btn.path)}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl mb-3">{btn.icon}</span>
            <span className="font-semibold text-lg">{btn.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}