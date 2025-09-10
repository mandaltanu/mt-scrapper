

interface MetaData {
  twitterTitle?: string;
  twitterDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
}

interface PreviewMetaProps {
  data: {
    title?: string;
    description?: string;
    image?: string;
    meta?: MetaData;
  };
}

export default function PreviewMeta({ data }: PreviewMetaProps) {
  return (
    <div className="p-6 bg-white border rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-indigo-700 mb-4">Preview</h2>

      {/* Facebook Preview */}
      <div className="border border-gray-200 bg-gray-50 p-4 mb-4 rounded-lg shadow-sm">
        <p className="text-gray-500 text-xs mb-1">Facebook</p>
        <p className="font-semibold text-gray-900">{data.title}</p>
        <p className="text-sm text-gray-700">{data.description}</p>
        {data.image && (
          <img
            src={data.image}
            alt="fb"
            className="mt-2 rounded-md border border-gray-200"
          />
        )}
      </div>

      {/* Twitter Preview */}
      <div className="border border-gray-200 bg-gray-50 p-4 mb-4 rounded-lg shadow-sm">
        <p className="text-gray-500 text-xs mb-1">Twitter</p>
        <p className="font-semibold text-gray-900">
          {data.meta?.twitterTitle || data.title}
        </p>
        <p className="text-sm text-gray-700">
          {data.meta?.twitterDescription || data.description}
        </p>
        {data.image && (
          <img
            src={data.image}
            alt="twitter"
            className="mt-2 rounded-md border border-gray-200"
          />
        )}
      </div>

      {/* Discord Preview */}
      <div className="border border-gray-200 bg-gray-50 p-4 mb-4 rounded-lg shadow-sm">
        <p className="text-gray-500 text-xs mb-1">Discord</p>
        <p className="font-semibold text-gray-900">
          {data.meta?.ogTitle || data.title}
        </p>
        <p className="text-sm text-gray-700">
          {data.meta?.ogDescription || data.description}
        </p>
        {data.image && (
          <img
            src={data.image}
            alt="discord"
            className="mt-2 rounded-md border border-gray-200"
          />
        )}
      </div>

      {/* Instagram Preview */}
      <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-sm">
        <p className="text-gray-500 text-xs mb-1">Instagram</p>
        {data.image && (
          <img
            src={data.image}
            alt="instagram"
            className="mt-2 rounded-md border border-gray-200"
          />
        )}
        <p className="font-semibold text-gray-900 mt-2">{data.title}</p>
      </div>
    </div>
  );
}

