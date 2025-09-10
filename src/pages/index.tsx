
"use client";
import { useState, useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import UrlInput from "../components/UrlInput";
import EditMeta from "../components/EditMeta";
import CopyMeta from "../components/CopyMeta";
import PreviewMeta from "../components/PreviewMeta";

const queryClient = new QueryClient();

interface MetaData {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  meta?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  error?: string;
}

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
}

function MainApp() {
  const [submittedUrl, setSubmittedUrl] = useState<string>("");
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  const { data, isLoading, error } = useQuery<MetaData, Error>({
    queryKey: ["scrape", submittedUrl],
    queryFn: async () => {
      const res = await fetch(
        `/api/scrape?url=${encodeURIComponent(submittedUrl)}`
      );
      return res.json();
    },
    enabled: !!submittedUrl,
  });

  useEffect(() => {
    if (data) {
      setMetaData(data);
    }
  }, [data]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-center text-2xl font-semibold mb-6">
        Free Meta Tag Scraper & Preview
      </h1>

      <UrlInput onSubmit={(url) => setSubmittedUrl(url)} />

      {isLoading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Error fetching website</p>}

      {metaData && !metaData.error && (
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <EditMeta data={metaData} onChange={setMetaData} />
          <CopyMeta data={metaData} />
          <PreviewMeta data={metaData} />
        </div>
      )}
    </div>
  );
}
