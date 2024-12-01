import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

interface Params {
  params: {
    id: string;
  };
}

interface Dungeon {
  id: number;
  name: string;
  description?: string;
}

export async function GET(req: NextRequest, { params }: Params): Promise<NextResponse> {
  try {
    const { id } = params;

    const dungeon: Dungeon | null = await prisma.dungeon.findUnique({
      where: { id: Number(id) },
      include: {
        loot: true,
      },
    });

    return NextResponse.json(dungeon);
  } catch (error) {
    console.error("Error fetching dungeon:", error);
    return NextResponse.json({ error: "Failed to fetch dungeon." }, { status: 500 });
  }
}
