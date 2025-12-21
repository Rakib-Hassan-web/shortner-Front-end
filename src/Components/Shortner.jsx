import { useState } from "react";

const Shortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const generateShortUrl = () => {
    if (!longUrl) return;

    const randomCode = Math.random().toString(36).substring(2, 7);
    const short = `https://sho.rt/${randomCode}`;

    setShortUrl(short);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🔗</div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            URL Shortener
          </h1>
          <p className="text-gray-600 mt-2">
            ✨ Make your long links short & shareable
          </p>
        </div>

        {/* Input */}
        <div className="relative">
          <input
            type="url"
            placeholder="🌐 Paste your long URL here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-4
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={generateShortUrl}
          className="w-full mt-5 bg-gradient-to-r from-indigo-600 to-pink-600
          hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
        >
          ✂️ Shorten URL
        </button>

        {/* Result */}
        {shortUrl && (
          <div className="mt-6 bg-gray-50 border rounded-xl p-4 flex items-center justify-between gap-3">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-medium truncate"
            >
              🔗 {shortUrl}
            </a>

            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition
                ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
            >
              {copied ? "✅ Copied!" : "📋 Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortner;
