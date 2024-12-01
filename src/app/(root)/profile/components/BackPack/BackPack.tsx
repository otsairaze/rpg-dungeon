import { Typography } from "@/components/shared";
import Image from "next/image";
import React from "react";

const BackPack = ({ data }: { data: any[] }) => {
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <Image src="/profile/rarity.svg" alt="backpack" width={24} height={24} />
        <Typography tag="h2" variant="title20_bold" color="subtitle">
          Рюкзак:
        </Typography>
      </div>
      <ul className="flex items-center gap-[15px]">
        {data.map((item, index) => (
          <li key={index} className="border border-[#D9D9D9] p-[30px]">
            <Image src={item.imageUrl} alt="backpack" width={75} height={75} className="mt-[20px]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BackPack;
