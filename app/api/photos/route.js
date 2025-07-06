import { getAllPhoto } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = getAllPhoto();

  return NextResponse.json(data);
}
