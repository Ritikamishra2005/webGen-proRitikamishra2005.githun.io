// github.js
export async function loginWithGitHub() {
  alert("Paste your GitHub Personal Access Token (PAT) in the next step.");
}

export async function publishToGitHub(html, css, js) {
  const token = prompt("Paste your GitHub Personal Access Token:");
  if (!token) return alert("Token required!");

  const username = await getUsername(token);
  const repoName = prompt("Enter a repository name:");
  if (!repoName) return alert("Repo name is required!");

  const content = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;
  const encodedContent = btoa(unescape(encodeURIComponent(content)));

  // Create repo
  await fetch(`https://api.github.com/user/repos`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      name: repoName,
      description: "Created via WebGen Pro",
      auto_init: true,
    }),
  });

  // Upload index.html
  await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/index.html`, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      message: "Initial commit from WebGen Pro",
      content: encodedContent,
    }),
  });

  // Enable GitHub Pages
  await fetch(`https://api.github.com/repos/${username}/${repoName}/pages`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      source: {
        branch: "main",
        path: "/",
      },
    }),
  });

  alert(`🎉 Website published at https://${username}.github.io/${repoName}/`);
}

async function getUsername(token) {
  const res = await fetch("https://api.github.com/user", {
    headers: { Authorization: `token ${token}` },
  });
  const data = await res.json();
  return data.login;
}
