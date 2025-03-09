import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const cars = await prisma.van.findMany();
  return NextResponse.json(cars);
}
