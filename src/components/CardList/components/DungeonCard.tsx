import Link from "next/link";
import styles from "./DungeonCard.module.css";
import Image from "next/image";
import { Typography } from "@/components/shared/Typography/Typography";

interface DungeonCardProps {
  difficulty: number;
  energy: number;
  cash: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const DungeonCard = ({ difficulty, energy, cash, title, description, imageUrl }: DungeonCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.background} src={imageUrl} alt="preview" />
      <div className={styles.content}>
        <ul className={styles.info}>
          <li className={styles.info_item}>
            <Image src={"/diff.svg"} alt="difficulty" width={24} height={24} className={styles.icon} />
            <Typography variant="paragraph16_regular" tag="span" className={styles.item}>
              {difficulty}
            </Typography>
          </li>
          <li className={styles.info_item}>
            <Image src={"/energy.svg"} alt="duration" width={24} height={24} className={styles.icon} />
            <Typography variant="paragraph16_regular" tag="span" className={styles.item}>
              {energy}
            </Typography>
          </li>
          <li className={styles.info_item}>
            <Image src={"/cash.svg"} alt="duration" width={24} height={24} className={styles.icon} />
            <Typography variant="paragraph16_regular" tag="span" className={styles.item}>
              {cash}%
            </Typography>
          </li>
        </ul>
        <div className={styles.title}>
          <Typography variant="title20_bold" tag="span">
            {title}
          </Typography>
          <Typography variant="paragraph16_regular" tag="span">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
