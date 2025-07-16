// CodeEditor.jsx
import React from "react";

export default function CodeEditor({ html, setHtml, css, setCss, js, setJs }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700">🔤 HTML</label>
        <textarea
          className="w-full p-2 rounded border bg-white"
          rows={5}
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">🎨 CSS</label>
        <textarea
          className="w-full p-2 rounded border bg-white"
          rows={5}
          value={css}
          onChange={(e) => setCss(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">⚙️ JavaScript</label>
        <textarea
          className="w-full p-2 rounded border bg-white"
          rows={5}
          value={js}
          onChange={(e) => setJs(e.target.value)}
        />
      </div>
    </div>
  );
}
