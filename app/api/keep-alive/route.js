import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.lifeChecks.create({
    data: {
      lastUpdate: new Date(),
    },
  });
  return NextResponse.json({ updated: new Date().toLocaleString() });
}
