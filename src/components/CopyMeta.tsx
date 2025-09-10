

"use client";
import React from "react";

interface MetaData {
  title?: string;
  description?: string;
  url?: string;
  meta?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
}

interface CopyMetaProps {
  data: MetaData;
}

export default function CopyMeta({ data }: CopyMetaProps) {
  
  const title = data.title ?? "";
  const description = data.description ?? "";
  const url = data.url ?? "";

  const ogTitle = data.meta?.ogTitle ?? "";
  const ogDescription = data.meta?.ogDescription ?? "";
  const ogImage = data.meta?.ogImage ?? "";

  const twitterCard = data.meta?.twitterCard ?? "";
  const twitterTitle = data.meta?.twitterTitle ?? "";
  const twitterDescription = data.meta?.twitterDescription ?? "";

  const metaTags = `
<!-- HTML Meta Tags -->
<title>${title}</title>
<meta name="description" content="${description}" />

<!-- Facebook Meta Tags -->
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${ogTitle}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:image" content="${ogImage}" />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="${twitterCard}" />
<meta name="twitter:title" content="${twitterTitle}" />
<meta name="twitter:description" content="${twitterDescription}" />
`.trim();

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(metaTags);
      alert("✅ Meta tags copied!");
    } else {
      
      alert("Clipboard API not available in this environment.");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="font-semibold text-indigo-600 flex items-center mb-3">
        <span className="mr-2">{"</>"}</span> Copy
      </h2>

      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm rounded p-3 mb-4">
        <strong>NEW:</strong> Automate Your Open Graph Images <br />
        Efficiently generate stylish OG images with our tool. Choose a template
        and instantly create consistent visuals for social media!
      </div>

      <pre className="bg-gray-900 text-green-400 text-xs p-4 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono leading-5 relative">
        {metaTags
          .split("\n")
          .map((line, idx) => (
            <div key={idx} className="flex">
              <span className="text-gray-500 pr-3 select-none">{idx + 1}</span>
              <span>{line}</span>
            </div>
          ))}
      </pre>

      <button
        onClick={copyToClipboard}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Copy Meta Tags
      </button>
    </div>
  );
}
