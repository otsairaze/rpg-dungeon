import React from "react";
import { Typography } from "../shared/Typography/Typography";
import { Container } from "../shared/Container/Container";

export const Footer = () => {
  return (
    <footer className="bg-[#262626] w-full py-10">
      <Container>
        <div className="flex flex-col gap-5">
          <Typography variant="title20_bold" tag="h2">
            DungeonsFight
          </Typography>
          <div className="flex flex-col">
            <Typography variant="paragraph16_regular" tag="span">
              Колекционка исторических предметов
            </Typography>
            <Typography variant="paragraph16_regular" tag="span">
              ©DungeonFight 2024
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
