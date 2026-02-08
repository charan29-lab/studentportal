import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [user, setUser] = useState(null);
  
    // Get logged-in user + listen to auth changes
    useEffect(() => {
      supabase.auth.getUser().then(({ data }) => {
        setUser(data?.user || null);
      });
  
      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user || null);
        }
      );
  
      return () => {
        listener.subscription.unsubscribe();
      };
    }, []);
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
           Hi 👋, {user?.user_metadata?.full_name || "Student"}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            All Your Academic
            <span className="text-blue-600"> Work</span>, One Place
          </h1>

          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            A modern student portal designed to simplify campus life. 
            View courses, track grades, manage assignments, and stay 
            updated with academic announcements effortlessly.
          </p>

          <p className="text-gray-600 max-w-xl">
            Built with clarity and performance in mind, this platform 
            helps students stay organized, focused, and always one 
            step ahead throughout their education journey.
          </p>
        </div>

        {/* Right Simple Illustration */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-7xl">📚</span>
          </div>
        </div>

      </div>
    </section>
  );
}
