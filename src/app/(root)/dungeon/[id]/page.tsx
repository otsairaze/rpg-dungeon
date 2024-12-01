import Image from "next/image";
import styles from "./page.module.css";
import { Button, Container, Typography } from "@/components/shared";

import ItemCard from "../components/ItemCard/ItemCard";

const DungeonPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/dungeon/${params.id}`);
  const data = await res.json();
  return (
    <>
      <Container variant="short">
        <div className={styles.wrapper}>
          <Image src={data.imageUrl} alt={data.name} width={280} height={380} />
          <div className={styles.info}>
            <ul className={styles.item_block}>
              <li className={styles.item}>
                <Typography tag="span" variant="paragraph16_semibold">
                  {data.energy}%
                </Typography>
                <Image src="/cash.svg" alt="cash" width={24} height={24} className={styles.icon} />
              </li>
              <li className={styles.item}>
                <Typography tag="span" variant="paragraph16_semibold">
                  {data.difficulty}
                </Typography>
                <Image src="/diff.svg" alt="diff" width={24} height={24} className={styles.icon} />
              </li>
              <li className={styles.item}>
                <Typography tag="span" variant="paragraph16_semibold">
                  {data.cash}
                </Typography>
                <Image src="/energy.svg" alt="energy" width={24} height={24} className={styles.icon} />
              </li>
            </ul>
            <div className={styles.info_block}>
              <Typography tag="h2" variant="title20_bold">
                {data.name}
              </Typography>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.description}>
        <div className="flex flex-col gap-[60px]">
          <div>
            <Typography tag="h2" variant="paragraph20_medium">
              Описание:
            </Typography>
            <Typography tag="span" variant="paragraph16_regular">
              {data.description}
            </Typography>
          </div>
          <div>
            <Typography tag="h2" variant="paragraph20_medium">
              Виды наград:
            </Typography>
            <div className={styles.item_list}>
              {Array.isArray(data.loot) && data.loot.length > 0 ? (
                data.loot.map((item, index) => <ItemCard key={index} title={item.title} energy={item.energy} price={item.price} imageUrl={item.imageUrl} />)
              ) : (
                <div>Нет доступных наград.</div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DungeonPage;
