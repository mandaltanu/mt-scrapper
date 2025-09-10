
import React from "react";

interface CopyMetaProps {
  data: any;
}

export default function CopyMeta({ data }: CopyMetaProps) {
  const metaTags = `
<!-- HTML Meta Tags -->
<title>${data.title}</title>
<meta name="description" content="${data.description}" />

<!-- Facebook Meta Tags -->
<meta property="og:url" content="${data.url}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${data.meta?.ogTitle}" />
<meta property="og:description" content="${data.meta?.ogDescription}" />
<meta property="og:image" content="${data.meta?.ogImage}" />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="${data.meta?.twitterCard}" />
<meta name="twitter:title" content="${data.meta?.twitterTitle}" />
<meta name="twitter:description" content="${data.meta?.twitterDescription}" />
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaTags);
    alert("✅ Meta tags copied!");
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
          .trim()
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
