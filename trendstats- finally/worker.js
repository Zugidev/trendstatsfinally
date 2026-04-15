export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ✅ API endpoint
    if (url.pathname === "/api/trends/all") {
      return new Response(JSON.stringify({
        trends: [
          "AI tools",
          "ChatGPT updates",
          "YouTube automation",
          "Passive income",
          "Startup ideas"
        ]
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // ❌ diğer her şey
    return new Response("Not found", { status: 404 });
  }
};
