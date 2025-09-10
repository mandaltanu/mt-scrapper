
"use client";
import React, { useState } from "react";

interface EditMetaProps {
  data: any;
  onChange: (updated: any) => void;
}

export default function EditMeta({ data, onChange }: EditMetaProps) {
  const [localData, setLocalData] = useState(data);

  const handleChange = (field: string, value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      handleChange("image", imageUrl);
    }
  };

  return (
    <div className="p-6 bg-white border rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2">
        Edit <span className="text-gray-400">⚙️</span>
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Customize how your content appears on search engines and social
        platforms. Modify the title, description, and image to optimize
        visibility and engagement.
      </p>

     
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Title
      </label>
      <input
        type="text"
        value={localData.title || ""}
        onChange={(e) => handleChange("title", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-1"
        placeholder="Enter page title"
      />
      <p className="text-xs text-gray-500 flex justify-between mb-4">
        <span>Recommended: 60 characters</span>
        <span
          className={
            (localData.title?.length || 0) > 60 ? "text-red-500" : "text-gray-400"
          }
        >
          {(localData.title?.length || 0)}/60
        </span>
      </p>

      
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Description
      </label>
      <textarea
        value={localData.description || ""}
        onChange={(e) => handleChange("description", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-1"
        rows={3}
        placeholder="Enter description"
      />
      <p className="text-xs text-gray-500 flex justify-between mb-4">
        <span>Recommended: 155–160 characters</span>
        <span
          className={
            (localData.description?.length || 0) > 160
              ? "text-red-500"
              : "text-gray-400"
          }
        >
          {(localData.description?.length || 0)}/160
        </span>
      </p>

      
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Image
      </label>
      <input
        type="text"
        value={localData.image || ""}
        onChange={(e) => handleChange("image", e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-3"
        placeholder="Enter image URL"
      />

     
      <div className="flex items-center justify-between mb-1">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-xs text-gray-400">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          className="hidden"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="upload-image"
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition"
        >
          Change Image
        </label>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Recommended: 1200 × 630px
      </p>
    </div>
  );
}
