export default function Courses() {
  const courses = ["Math 101", "Physics 201", "Chemistry 301", "Computer Science 101"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Courses</h1>
      <ul className="space-y-3 w-full max-w-md">
        {courses.map((course) => (
          <li key={course} className="bg-white p-4 rounded shadow">{course}</li>
        ))}
      </ul>
    </div>
  );
}