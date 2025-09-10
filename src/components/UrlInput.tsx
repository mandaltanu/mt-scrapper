import { useState } from "react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
}

export default function UrlInput({ onSubmit }: UrlInputProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    const validUrl = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i.test(url);
    if (validUrl) {
      onSubmit(url);
    } else {
      alert("Please enter a valid URL (with http/https)");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="url"
        placeholder="Enter Full URL"
        className="flex-1 p-3 border rounded-md"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 rounded-md"
      >
        Check Website
      </button>
    </div>
  );
}
