import { serveDir, serveFile } from "@std/http/file-server"

export default {
  fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 })
    }

    const pathname = new URL(request.url).pathname
    if (pathname === "/") {
      return serveFile(request, "index.html")
    }
    return serveDir(request)
  },
} satisfies Deno.ServeDefaultExport
