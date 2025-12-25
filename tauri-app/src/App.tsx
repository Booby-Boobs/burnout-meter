import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

interface TickerData {
  soul: number;
  news: string[];
}

function App() {
  const [soul, setSoul] = useState(100.0); // Will be updated from backend
  const [news, setNews] = useState<string[]>([]);
  const [newsIndex, setNewsIndex] = useState(0);

  const boostEnergy = async () => {
    await invoke("boost_energy");
  };

  useEffect(() => {
    const unlisten = listen<TickerData>("ticker-update", (event) => {
      setSoul(event.payload.soul);
      if (event.payload.news.length > 0 && news.length === 0) {
        setNews(event.payload.news);
        setNewsIndex(0);
      }
    });

    return () => {
      unlisten.then((fn) => fn());
    };
  }, [news.length]);

  // Cycle news every 10 seconds
  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % news.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [news.length]);



  return (
    <div className="h-36 bg-gray-100 text-black p-2">
        <div className="flex items-center justify-between h-8">
          <div className={`text-base font-bold font-['Press_Start_2P'] ${soul > 70 ? "text-green-500" : soul > 50 ? "text-orange-500" : soul > 20 ? "text-yellow-500" : soul > 0 ? "text-red-500" : "text-red-700"}`}>
            Energy: {soul.toFixed(0)}%
          </div>
        <div className="flex-1 mx-4 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee font-['Press_Start_2P'] text-sm">
            {news.length > 0 && (
              <span>{news[newsIndex]}</span>
            )}
          </div>
        </div>
        <button
          onClick={boostEnergy}
          className="px-2 py-1 bg-pink-500 hover:bg-pink-600 rounded text-sm text-white mr-2"
        >
          Endure +5%
        </button>
        <button
          onClick={() => setSoul(Math.max(soul - 5, 0))}
          className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm text-black"
        >
          Annoyed -5%
        </button>

        </div>
        <div className="h-4 bg-gray-300 rounded overflow-hidden mt-1">
          <div
            className={`h-full transition-all duration-300 ${soul > 70 ? "bg-green-500" : soul > 50 ? "bg-orange-500" : soul > 20 ? "bg-yellow-500" : "bg-red-500"}`}
            style={{ width: `${Math.max(soul, 0)}%` }}
          ></div>
        </div>

      <div className="text-center text-xs text-gray-500 mt-1">
        <img src="/everyday.png" className="w-4 h-4 rounded-full inline mr-1" />
        we are <a href="https://booby.dev/about"><img src="/boobs.png" className="h-5 w-auto inline" /></a>
      </div>
    </div>
  );
}

export default App;
