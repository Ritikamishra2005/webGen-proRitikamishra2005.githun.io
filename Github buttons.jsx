// GithubButtons.jsx
import React from "react";
import { loginWithGitHub, publishToGitHub } from "./github";

export default function GithubButtons({ html, css, js }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center">
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={loginWithGitHub}
      >
        🔐 Login with GitHub
      </button>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => publishToGitHub(html, css, js)}
      >
        🚀 Publish to GitHub
      </button>
    </div>
  );
}
