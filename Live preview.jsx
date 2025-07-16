// LivePreview.jsx
import React, { useEffect, useRef } from "react";

export default function LivePreview({ html, css, js }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const doc = iframeRef.current.contentDocument;
    doc.open();
    doc.write(`
      <html>
        <head><style>${css}</style></head>
        <body>${html}<script>${js}</script></body>
      </html>
    `);
    doc.close();
  }, [html, css, js]);

  return (
    <div className="border rounded shadow-md h-[400px]">
      <iframe
        ref={iframeRef}
        title="Live Preview"
        className="w-full h-full bg-white"
      />
    </div>
  );
}
