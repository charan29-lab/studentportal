import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
        📘
      </div>

      <h1 className="text-4xl font-bold mb-4">Student Portal</h1>
      <p className="text-gray-600 max-w-md">
        Access your courses, grades, and academic resources all in one place
      </p>
    </div>
  );
}

 