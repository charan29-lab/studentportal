import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            STUDENTPORTAL
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            {!user ? (
              <>
                <a href="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </a>
                <a href="/register" className="text-gray-700 hover:text-blue-600">
                  Register
                </a>
              </>
            ) : (
              <>
                <span className="text-gray-700 font-medium">
                  👋 {user.user_metadata?.full_name || "Student"}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>

          {!user ? (
            <>
              <a href="/login" className="block text-gray-700 hover:text-blue-600">
                Login
              </a>
              <a href="/register" className="block text-gray-700 hover:text-blue-600">
                Register
              </a>
            </>
          ) : (
            <>
              <p className="text-gray-700 font-medium">
                👋 {user.user_metadata?.full_name || "Student"}
              </p>
              <button
                onClick={handleLogout}
                className="block text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}