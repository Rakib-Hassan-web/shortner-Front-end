
import { useState } from "react";

const Shortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const generateShortUrl = () => {
    if (!longUrl) return;

    // demo short url (later backend API will replace this)
    const randomCode = Math.random().toString(36).substring(2, 7);
    const short = `https://sho.rt/${randomCode}`;

    setShortUrl(short);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          🔗 URL Shortener
        </h1>

        {/* Input */}
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          onClick={generateShortUrl}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
        >
          Shorten URL
        </button>

        {/* Result */}
        {shortUrl && (
          <div className="mt-6 bg-gray-50 border rounded-lg p-4 flex items-center justify-between gap-2">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 truncate"
            >
              {shortUrl}
            </a>

            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortner;
