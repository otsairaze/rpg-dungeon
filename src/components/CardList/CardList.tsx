import React from "react";
import { DungeonCard } from "./components/DungeonCard";

import styles from "./CardList.module.css";
import { dungeons } from "../../../prisma/constants/dungeon";
import Link from "next/link";

export const CardList = () => {
  return (
    <div className={styles.wrapper}>
      {dungeons.map((dungeon, index) => (
        <Link href={`/dungeon/${dungeon.id}`} key={dungeon.id} passHref>
          <DungeonCard
            difficulty={dungeon.difficulty}
            energy={dungeon.energy}
            cash={dungeon.cash}
            title={dungeon.name}
            description={dungeon.description}
            imageUrl={dungeon.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
};
