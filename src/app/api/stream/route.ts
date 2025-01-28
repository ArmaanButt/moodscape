import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { body } = req;
  console.log(body);
  return res.status(200).json({ body });
}

export async function GET() {
  return NextResponse.json({ hello: "world" });
}
