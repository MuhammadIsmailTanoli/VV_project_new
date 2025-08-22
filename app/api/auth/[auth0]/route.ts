// app/api/auth/[auth0]/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export { GET, POST } from "@auth0/nextjs-auth0";
