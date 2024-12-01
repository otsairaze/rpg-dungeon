import { Typography } from "@/components/shared";
import Image from "next/image";
import React from "react";

const RarityList = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="flex gap-[12px]">
      {data.map((item, index) => (
        <li key={index} className="flex items-center justify-center gap-2 bg-[#A78A84] px-4 rounded max-w-[50px]">
          <Typography variant="paragraph16_semibold" tag="span">
            {item}
          </Typography>
          <Image src="/profile/rarity.svg" alt="energy" width={16} height={16} />
        </li>
      ))}
    </ul>
  );
};

export default RarityList;
