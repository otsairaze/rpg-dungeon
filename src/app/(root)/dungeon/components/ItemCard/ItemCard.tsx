import React from "react";
import Image from "next/image";
import { Typography } from "@/components/shared";

interface ItemCardProps {
  title: string;
  energy: number;
  price: number;
  imageUrl: string;
}

const ItemCard = ({ title, energy, price, imageUrl }: ItemCardProps) => {
  return (
    <div className="bg-[#262626] p-5 flex items-center justify-between max-w-[320px] gap-[30px]">
      <div className="flex">
        <Image src={imageUrl} alt="energy" width={64} height={64} />
      </div>
      <div className="flex flex-col">
        <Typography variant="paragraph16_semibold" tag="span">
          {title}
        </Typography>
        <Typography color="subtitle" variant="paragraph16_semibold" tag="span">
          Шанс выпадения: {energy} %
        </Typography>
        <div className="flex gap-2">
          <Typography color="subtitle" variant="paragraph16_semibold" tag="span">
            Стоимость: {price}
          </Typography>
          <Image src="/cash.svg" alt="energy" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
