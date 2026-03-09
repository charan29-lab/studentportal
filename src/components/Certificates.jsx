import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Certificates() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const { data, error } = await supabase.storage
      .from("certificates")
      .upload(`public/${file.name}`, file, { upsert: true });

    if (error) alert("Upload failed: " + error.message);
    else {
      const url = supabase.storage.from("certificates").getPublicUrl(data.path).publicUrl;
      setUploadedUrl(url);
      alert("Uploaded successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Certificates</h1>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-6 py-3 rounded-md">
        Upload Certificate
      </button>

      {uploadedUrl && (
        <div className="mt-6">
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            View Uploaded Certificate
          </a>
        </div>
      )}
    </div>
  );
}