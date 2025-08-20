import { handleAuth } from "@auth0/nextjs-auth0";

export const runtime = "nodejs"; // ensure Node, not Edge

const authHandler = handleAuth();

export async function GET(
  req: Request,
  ctx: { params: Promise<{ auth0: string[] }> }
) {
  return authHandler(req, { params: await ctx.params } as any);
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ auth0: string[] }> }
) {
  return authHandler(req, { params: await ctx.params } as any);
}
