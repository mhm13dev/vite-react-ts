import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-slate-400 p-8 border-b border-b-slate-800">
        Vite + React + TailwindCSS + TypeScript 🔥
      </h1>

      <div className="text-slate-300 text-center font-medium my-8">
        <h3 className="text-2xl">Message from Express.js API</h3>
        <p className="mt-4 text-lg">
          {message ?? <span className="text-red-500">Not Fetched!</span>}
        </p>
      </div>
    </div>
  );
}

export default App;
