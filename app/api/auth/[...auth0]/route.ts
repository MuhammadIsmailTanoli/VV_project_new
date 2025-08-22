export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // ensure no static caching

export async function GET() {
  const safe = {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID ? "set" : "missing",
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET ? "set" : "missing",
    AUTH0_SECRET: process.env.AUTH0_SECRET ? "set" : "missing",
  };
  return new Response(JSON.stringify(safe, null, 2), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}
