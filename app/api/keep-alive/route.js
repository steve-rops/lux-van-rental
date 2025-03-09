import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.lifeChecks.create({
    data: {
      lastUpdate: new Date().toLocaleString(),
    },
  });
  return NextResponse.json(res.lastUpdate);
}
