import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

// Извлечение параметров из функции обработчика
export async function GET() {
  try {
    const user = await prisma.user.findMany({
      include: {
        inventory: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user data." }, { status: 500 });
  }
}
