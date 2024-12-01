import { users } from "./constants";
import { dungeons } from "./constants/dungeon";
import { inventory } from "./constants/inventory";
import { loot } from "./constants/loot";
import { prisma } from "./prisma-client";

async function generateData() {
  await prisma.user.createMany({
    data: users,
  });
  await prisma.dungeon.createMany({
    data: dungeons,
  });
  await prisma.loot.createMany({
    data: loot,
  });
  await prisma.inventory.createMany({
    data: inventory,
  });
}

async function clearData() {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Dungeon" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Loot" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "DungeonHistory" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Inventory" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ItemShop" RESTART IDENTITY CASCADE`;
  } catch (error) {
    console.log(error, "Ошибка");
  }
}

async function main() {
  try {
    await clearData();
    await generateData();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    return;
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
